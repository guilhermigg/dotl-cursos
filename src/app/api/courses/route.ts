import { NextRequest, NextResponse } from "next/server"
import { CourseModel, ICourse } from "@/app/models/Course";
import Knex from "knex";
import knexConfig from "@/../knexfile";
import { uploadFile } from "@/app/api/helpers/minioHandler";
import { Readable } from "stream";
import { getServerSession } from "next-auth";
import { UserModel } from "@/app/models/User";

import { options } from '@/app/api/auth/[...nextauth]/options';

const knex = Knex(knexConfig);

export async function GET() {
    interface IResponseData {
        courses: ICourse[]
    }

    let response;
    const courseModel = new CourseModel(knex);

    try {
        response = await courseModel.listAll();
    } catch (e) {
        console.log("Error fetching courses", e)
    }

    return NextResponse.json({"courses": response}); 
}

export async function POST(req:any, res: NextResponse) {
    const data = await req.formData();
    const session = await getServerSession(options);
    console.log('Session user:', session);

    if (!session || !session.user)
        return NextResponse.json({ error: "Usuário não logado" }, { status: 401 });

    const user = session.user;

    if(!user || !user.email) 
        return NextResponse.json({ error: "Usuário não logado" }, { status: 401 });

    const title = data.get("title") as string;
    const description = data.get("description") as string;
    let price = data.get("price") as string;
    const thumbnail = data.get("thumbnail");

    if(!title)
        return NextResponse.json({ error: "Título vazio" }, { status: 400 });
    if(!description)
        return NextResponse.json({ error: "Descrição vazia" }, { status: 400 });
    if(!price)
        return NextResponse.json({ error: "Preço vazio" }, { status: 400 });
    if(!thumbnail)
        return NextResponse.json({ error: "Thumbnail vazia" }, { status: 400 });

    const thumbnailBuffer = await thumbnail?.arrayBuffer();
    const thumbnailStream = Readable.from(Buffer.from(thumbnailBuffer));

    const filename = Date.now() + thumbnail.name.replace(/\s+/g, "_");

    const userModel = new UserModel(knex);
    const userFound = await userModel.findByEmail(user.email);

    if(!userFound) 
        return NextResponse.json({ error: "Usuário não logado" }, { status: 401 });

    try{
        await uploadFile('courses-thumbnail', filename, thumbnailStream)

        await knex('courses').insert({
            "title": title.trim(),
            "teacher_id": userFound?.id,
            "description": description.trim(),
            "thumbnail": filename,
            "price": parseFloat(price) * 100,
            "active": false
        });

        return NextResponse.json({"message": "created","error": false});
    } catch (e) {
        console.log(e)
        return NextResponse.json({"error": true}, { status: 400 });
    }
}
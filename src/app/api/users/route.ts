import { NextRequest, NextResponse } from "next/server"
import { ICourse } from "@/app/models/Course";
import Knex from "knex";
import knexConfig from "@/../knexfile";
import { getServerSession } from "next-auth";
import { UserModel } from "@/app/models/User";
import { hashPassword } from "../helpers/bcryptHandler";
import { validateEmail } from "../helpers/validator";

import { options } from '@/app/api/auth/[...nextauth]/options';

const knex = Knex(knexConfig);

async function handleUserSession(admin=false) {
    const session = await getServerSession(options);

    if (!session || !session.user) return null
    if(!session.user || !session.user.email) return null

    const userModel = new UserModel(knex);
    const userFound = await userModel.findByEmail(session.user.email);

    if(!userFound) return null

    if(admin && userFound.role != "1") return null

    return userFound
}

export async function GET() {
    interface IResponseData {
        courses: ICourse[]
    }

    const user = await handleUserSession(true);

    if(!user)
        return NextResponse.json({ error: "Usuário não logado" }, { status: 401 });

    try {
        const response = await knex('users');
        return NextResponse.json({"users": response}); 
    } catch (e) {
        console.log("Error fetching users", e)
        return NextResponse.json({error: true, users: []}, {status: 400}); 
    }
}

export async function POST(req:any, res: NextResponse) {
    const data = await req.formData();

    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const password = data.get("password") as string;
    const role = data.get("role") as string || "3";
    //const image = data.get("image");

    const user = await handleUserSession(role != "3");
    if(!user)
        return NextResponse.json({ error: "Usuário não logado" }, { status: 401 });
    if(validateEmail(email))
        return NextResponse.json({ error: "Email não é válido", email }, { status: 401 });
    if(!name)
        return NextResponse.json({ error: "Nome vazio" }, { status: 400 });
    if(!email)
        return NextResponse.json({ error: "Email vazio" }, { status: 400 });
    if(!password || password.length < 8)
        return NextResponse.json({ error: "Senha inválida" }, { status: 400 });

    const hashedPassword = await hashPassword(password);

    try{
        const userModel = new UserModel(knex);
        await userModel.create({
            "name": name.trim(),
            "email": email.trim(),
            "password": hashedPassword,
            "role": role,
            "active": true
        });

        return NextResponse.json({"message": "created","error": false});
    } catch (e) {
        console.log(e)
        return NextResponse.json({"error": true}, { status: 400 });
    }
}
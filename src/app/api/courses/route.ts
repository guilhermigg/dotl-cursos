import { NextRequest, NextResponse } from "next/server"
import { ICourse } from "@/app/models/Course";
import Knex from "knex";
import knexConfig from "@/../knexfile";

const knex = Knex(knexConfig);

export async function GET() {
    interface IResponseData {
        courses: ICourse[]
    }

    let response;

    try {
        response = await knex('courses');
    } catch (e) {
        console.error("Error fetching courses", e)
    }

    return NextResponse.json({"courses": response}); 
}

export async function POST(request : NextRequest) {
    const data = await request.json();

    const title = data.title.trim();
    const description = data.description.trim();
    const price = data.price * 100;

    try{
        await knex('courses').insert({
            "title": title,
            "description": description,
            "price": price,
            "active": false
        })
    } catch (e) {
        console.log("Error at creating a course")
    }
    return NextResponse.json({"message": "ok"});
}
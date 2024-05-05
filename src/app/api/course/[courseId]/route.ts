import { NextResponse } from "next/server"
import { CourseModel } from "@/app/models/Course";
import Knex from "knex";
import knexConfig from "@/../knexfile";

const knex = Knex(knexConfig);

export async function GET(route: { params: { courseId: string } }) {
    const courseId = route.params.courseId;
    const courseModel = new CourseModel(knex);

    try {
        const response = await courseModel.findById(parseInt(courseId as string));
        return NextResponse.json(response); 
    } catch (e) {
        console.log("Error fetching course", e)
        return NextResponse.json({error: "Error at fetching the course"}, {status: 500}); 
    }
}
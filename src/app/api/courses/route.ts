import { NextResponse } from "next/server"
import { Knex } from "knex";

export async function GET() {
    return NextResponse.json({
        "hello": "world"
    }); 
}
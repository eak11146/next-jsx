 
import { NextResponse } from "next/server";
import connectMongoDB from "../../../../lib/mongodb" //*import path source
import Topic from "../../../../models/topic";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
    await  connectMongoDB();
  await Topic.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Topic updated api" }, { status: 200 });  
  await connectToDatabase
  
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const topic = await Topic.findOne({ _id: id });
  return NextResponse.json({ topic }, { status: 200 });
}
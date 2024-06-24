import { NextResponse } from "next/server";
import Contact from "@/app/modeles/contact";
import connectDB from "@/app/lib/mongodb";
import mongoose from "mongoose";

export async function POST(req){

    const {fullname, email, message} = await req.json();
    try{
        await connectDB();
        await Contact.create({fullname, email,message});
        return NextResponse.json({msg:['message sent succeffuly'],success:true});
    }catch(error){if(error instanceof mongoose.Error.ValidationError){
        let errorList = [];
        for (let e in error.errors){
            errorList.push(error.errors[e].message);
        }}else{
            return NextResponse.json({msg:['unable to send message']});}}
        }


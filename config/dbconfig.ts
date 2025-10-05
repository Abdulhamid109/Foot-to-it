import mongoose from 'mongoose';
import { NextResponse } from 'next/server';


export async function connect(){
    try {
        await mongoose.connect(process.env.MONGO_URL!);
        const connection = mongoose.connection;

        connection.on("connected",()=>{
            console.log("Successfully connected to database!!");
        });
        connection.on("error",()=>{
            console.log("Something went wrong ,Failed to connect to db")
            process.exit(1);
        })
    } catch (error) {
        return NextResponse.json(
            {error:"Internal Server error!!"+error},
            {status:500}
        )
    }
}
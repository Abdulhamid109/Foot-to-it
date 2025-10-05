import { connect } from "@/config/dbconfig";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt"
import user from "@/models/userModal";



connect();


export async function POST(request:NextRequest) {
    try {
        const {FullName,email,phoneNumber,password,Address} = await request.json();
        
        if(!FullName || !email ||!phoneNumber || !password ||!Address){
            return NextResponse.json(
                {error:"Please enter your credentials"},
                {status:404}
            )
        }
        const genSalt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,genSalt);

        const newUser = new user({
            FullName,
            email,
            password:hashedPassword,
            phoneNumber,
            Address
        });

        const savedUSer = await newUser.save();
        return NextResponse.json(
            {success:true,message:"Successfully account created"},
            {status:200}
        )
    } catch (error) {
        return NextResponse.json(
            {error:"Internal Server error"+error},
            {status:500}
        )
    }
}
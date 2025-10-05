import { connect } from "@/config/dbconfig";
import user from "@/models/userModal";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


connect();


export async function POST(request:NextRequest) {
    try {
        const {email,password} = await request.json();
        if(!email || !password){
            return NextResponse.json(
                {error:"Enter the credentails"},
                {status:404}
            )
        }
        const useravailibitly = await user.findOne({email});
        if(!useravailibitly){
            return NextResponse.json(
                {error:"User not found..kindly Signup"},
                {status:401}
            )
        }
        const passwordCheck = await bcrypt.compare(password,useravailibitly.password);
        if(!passwordCheck){
            return NextResponse.json(
                {error:"Invalid Credentails"},
                {status:401}
            )
        }

        const PayloadData = {
            email
        }

        const token = jwt.sign(PayloadData,process.env.SECRET_KEY!,{
            expiresIn:'1d'
        });

        const response = NextResponse.json(
            {success:true,message:"Successfully logged in",token},
            {status:200}
        );

        response.cookies.set("token",token,{
            httpOnly:true
        });
        return response;
    } catch (error) {
        return NextResponse.json(
            {error:"Internal Server error"+error},
            {status:500}
        )
    }
}
import { connect } from "@/config/dbconfig";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import CompanyData from "@/models/adminstrationModal";


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
        // const useravailibitly = await CompanyData.findOne({email});
        // if(!useravailibitly){
        //     return NextResponse.json(
        //         {error:"admin not found..kindly enter proper account name"},
        //         {status:401}
        //     )
        // }
        // const passwordCheck = await bcrypt.compare(password,useravailibitly.password);
        // if(!passwordCheck){
        //     return NextResponse.json(
        //         {error:"Invalid Credentails"},
        //         {status:401}
        //     )
        // }

        const PayloadData = {
            email
        }

        const token = jwt.sign(PayloadData,process.env.SECRET_KEY!,{
            expiresIn:'1d'
        });

        const response = NextResponse.json(
            {success:true,message:"Successfully logged in"},
            {status:200}
        );

        response.cookies.set("Admintoken",token,{
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
import { connect } from "@/config/dbconfig";
import { NextResponse } from "next/server";




connect();


export async function GET() {
    try {
        const response = NextResponse.json(
            {success:true,message:"successfully logged out!!"},
            {status:200}
        );

        const tokenresponse = response.cookies.set("token","",{
            httpOnly:true
        });
        return tokenresponse;
    } catch (error) {
        return NextResponse.json(
            {error:"Internal Server error"+error},
            {status:500}
        )
    }
}
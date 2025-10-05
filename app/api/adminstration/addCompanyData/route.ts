import { connect } from "@/config/dbconfig";
import CompanyData from "@/models/adminstrationModal";
import { NextRequest, NextResponse } from "next/server";


connect();

export async function POST(request:NextRequest){
    try {
        const {CompanyName,CompanyAddressOrParkName,CompanyDescription,companyPic} = await request.json();
        if(!companyPic||!CompanyName||!CompanyAddressOrParkName||!CompanyDescription){
            return NextResponse.json(
                {error:"Please enter the required detail to fill up the company!!"},
                {status:404}
            )
        }
        
        const newCompany = new CompanyData({
            CompanyName,
            CompanyAddressOrParkName,
            CompanyDescription,
            companyPic
        });

        const saveNewCompany = await newCompany.save();

        return NextResponse.json(
            {success:true,message:"Successfully added the company"+saveNewCompany},
            {status:200}
        )
    } catch (error) {
        
    }
}
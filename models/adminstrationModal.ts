// here we are gonna add the company data in here
import mongoose from "mongoose";



const AdminCompanyData = new mongoose.Schema({
    email:{
        type:String,
        default:"admin@gmail.com",
        required:true
    },
    CompanyName:{
        type:String,
        required:true
    },
    CompanyAddressOrParkName:{
        type:String,
        required:true
    },
    CompanyDescription:{
        type:String,
        required:true
    },
    companyPic:{
        type:String,
        required:true
    }

});

const CompanyData = mongoose.models.company || mongoose.model("model",AdminCompanyData);
export default CompanyData;
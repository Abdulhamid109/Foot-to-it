import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    FullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    GroupId:{
        type:String,
    },
    Address:{
        type:String
    },
    LiveLocation:{
        type:String
    },

});

const user = mongoose.models.users || mongoose.model("users",userSchema);
export default user;
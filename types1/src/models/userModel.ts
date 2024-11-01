import mongoose,{Document,Schema}from "mongoose";

interface IUSer extends Document {
    name: string;
    email: string;
    password: string;
};


const userSchema: Schema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        min:6,
        max:16
    },
},{timestamps: true})


const User = mongoose.model('User',userSchema);
export default User;
import User from "../models/userModel";

export class UserDao{
    async getUserByEmail(email:string):Promise<any>{
        try {
            const user = await User.findOne({email});
            return user;
        } catch (error) {
            throw error;
        }
    };
    
    async createUser(userDetails:{name:string, email:string, password:string}):Promise<any>{
        try {
            const newUser = new User(userDetails);
            await newUser.save();
            return newUser;
        } catch (error) {
            throw error;
        }
    }
}
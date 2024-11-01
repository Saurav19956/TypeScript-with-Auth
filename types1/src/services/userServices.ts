import {UserDao} from '../daos/userDao';
import bcrypt from 'bcrypt';

export class UserService {
    private dao: UserDao;
    constructor(dao:UserDao){
        this.dao = dao;
    }
    register = async(name:string, email:string, password: string):Promise<any>=>{
         try {
            const existingUser = await this.dao.getUserByEmail(email);
                if(existingUser){
                    throw new Error('User is already exist');
                }
            const hashedPassword = await bcrypt.hash(password,10);
            const newUser = await this.dao.createUser({
                name,
                email,
                password: hashedPassword
            })
            return newUser;
            
         } catch (error) {
            console.log('error in registration');
            throw error;
            
         }
    }
}
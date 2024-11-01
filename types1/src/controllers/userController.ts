import { Request, Response } from "express";
import { sendApiResponse } from "../utils/helpers";
import {UserService} from '../services/userServices';



export class UserController{
 private service: UserService;
 constructor(service: UserService){
   this.service = service;
 }
  register = async (req:Request, res: Response):Promise<Response> =>{
  const {name, email,password} = req.body;
  try {
    if(!name || !email || !password){
        return sendApiResponse(res, 400, {}, 'Required all fields')
    }

    const user = await this.service.register(name,email,password)
    return sendApiResponse(res,201, user,'user is register succesfully')
    
  } catch (error) {
    console.log('error in registration', error);
    throw error;
  }

 }
}
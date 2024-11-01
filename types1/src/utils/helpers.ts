import {Response} from 'express';

export const sendApiResponse = (res: Response, statusCode: number, data: any, message: string = 'success'):Response =>{
   return res.status(statusCode).json({
    status: statusCode,
    data,
    message
   })
}
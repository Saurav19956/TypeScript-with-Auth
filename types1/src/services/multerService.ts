import { rejects } from 'assert';
import fs from 'fs';
import path from 'path';

const directoryPath = 'uploads/';

const getUploadedFiles = (): Promise<string[]> =>{
    return new Promise((resolve, reject)=>{
        fs.readdir(directoryPath,(err,files)=>{
            if(err){
                return reject("Error reading directory");
            }
            resolve(files);
        })
    })
}

export {getUploadedFiles};
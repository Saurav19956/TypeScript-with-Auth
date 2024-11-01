import path from 'path';
import { Request, Response, NextFunction } from 'express';
import upload from '../configs/multerConfig';
import { getUploadedFiles } from '../services/multerService';

// Serve HTML form for file upload
const getFileUploadForm = (req: Request, res: Response): void => {
    res.sendFile(path.join(__dirname, '../views', 'index.html'));
  };
  
  // Handle file upload
  const uploadFile = (req: Request, res: Response, next: NextFunction): void => {
    if (!req.file) {
      return next(new Error('No file uploaded.'));
    }
  
    console.log('Uploaded file:', req.file);
  
    getUploadedFiles()
      .then(files => {
        let strFilenames = `<a href='/'>Home</a><br/>`;
  
        files.forEach(file => {
          strFilenames += `<a target='_blank' href='/file/${file}'>${file}</a><br/>`;
        });
        res.send(strFilenames);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  };
  
  export { getFileUploadForm, uploadFile, upload as uploadMiddleware };
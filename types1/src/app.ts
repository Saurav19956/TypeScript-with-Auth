import express from 'express';
import mongoose from 'mongoose';
import {config} from './configs/configs';
import  userRoute from './routes/userRoute'
import fileRoutes from './routes/multerRoute';
import path from 'path';
import fs from 'fs';
const app = express();

app.use(express.json());
app.use('/api/user',userRoute);

app.use('/', fileRoutes);
app.use('/file', express.static('uploads'));
// Set the views directory
app.use(express.static(path.join(__dirname, 'views')));

// Define the path for the uploads directory
const uploadsDirectory = path.join(__dirname, '../uploads');

// Check if the uploads directory exists; if not, create it
if (!fs.existsSync(uploadsDirectory)) {
  fs.mkdirSync(uploadsDirectory);
  console.log('Uploads directory created.');
} else {
  console.log('Uploads directory already exists.');
}

app.get('/',(req,res)=>{
    res.send('Welcome to typescript app')
});


const dbConnection = async ()=>{
  try {
    const mongoUri = config.mongoUri;
    // console.log(mongoUri);
    if(!mongoUri){
        throw new Error('uri is not defined')
    }
    await mongoose.connect(mongoUri);
    console.log('db connect Successfully');
    
  } catch (error) {
    console.log(`Error in db Connection${error}`);
    
  }
}

dbConnection();

export default app;

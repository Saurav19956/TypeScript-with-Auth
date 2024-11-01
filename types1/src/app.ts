import express from 'express';
import mongoose from 'mongoose';
import {config} from './configs/configs';
import  userRoute from './routes/userRoute'


const app = express();

app.use(express.json());
app.use('/api/user',userRoute)

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

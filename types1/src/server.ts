import app from './app';
import {config} from './configs/configs';



app.listen(config.port,()=>{
    console.log(`server is running at ${config.port} port`);
    
});

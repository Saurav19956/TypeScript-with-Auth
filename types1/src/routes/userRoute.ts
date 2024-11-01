
import express from 'express';
import {UserController} from '../controllers/userController';
import {UserService} from '../services/userServices';
import {UserDao} from '../daos/userDao';

const router = express.Router();

const controller = new UserController(new UserService(new UserDao));

//router.post('register', controller.register.bind(controller))
router.post('/register',(req,res)=>{
    controller.register(req,res).catch((error)=>{
        return res.status(500).json({
            message: 'Internal Server error'
        }) 
    })
})
export default router;

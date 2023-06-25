import { Request, Response } from "express";
import { CreateUserUseCase } from "../../application/CreateUserUseCase";
import { UserRepository } from "../../infrastructure/UserRepository";
import { BcryptPasswordService } from "../../application/BcryptPasswordService";
import {v4 as uuidv4} from 'uuid';
import { LoginUseCase } from "../../application/LoginUseCase";
import { JwtService } from "../../application/JwtService";


/**
 * Register User --> repositories / services and use cases.
 */

const userRepository = new UserRepository();
const passwordService = new BcryptPasswordService();
const createUserUseCase = new CreateUserUseCase(passwordService, userRepository);


/**
 * 
 * Function that is used to register the user. (CreateUserUseCase)
 * @param req 
 * @param res 
 */
export async function registerUser(req: Request, res : Response){
    try{
        const {name, email, password} =  req.body;
        const user = {
            id: uuidv4(),
            name,
            email,
            password,
        }
        await createUserUseCase.execute(user);
        res.status(201).json({message: 'User registrated successfully!'})

    }catch(error){
        console.log(error)
        res.status(500).json({message: 'Internal server error'})
    }
}


/**
 * Login repository --> repositories / services and use cases.
 */
const jwtService = new JwtService();
const loginUseCase = new LoginUseCase(userRepository, passwordService, jwtService);

export async function login(req : Request, res : Response){
    try {
        const {email, password} = req.body
        const token = await loginUseCase.execute(email, password);
        if (!token){
            res.status(400).json({message: 'Invalid email or password'})
            return;
        }
        res.status(200).json({token: token})
    }catch(error){
        console.log(error);
        res.status(500).json({message: "Internal server error."})
    }
}
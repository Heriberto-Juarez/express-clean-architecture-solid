import { Request, Response } from "express";
import { CreateUserUseCase } from "../../application/CreateUserUseCase";
import {v4 as uuidv4} from 'uuid';
import { LoginUseCase } from "../../application/LoginUseCase";
import {injectable, inject} from 'tsyringe';
import { ValidationError } from "../../errors/ValidationError";

@injectable()
export class UserController {
    constructor(
        @inject('CreateUserUseCase')
        private readonly createUserUseCase : CreateUserUseCase,
        @inject('LoginUseCase')
        private readonly loginUseCase : LoginUseCase
    ){}

    registerUser = async (req : Request, res : Response)=>{
        const {name, email, password} =  req.body;
        const user = {
            id: uuidv4(),
            name,
            email,
            password,
        }
        await this.createUserUseCase.execute(user);
        res.status(201).json({message: 'User registrated successfully!'})

    }

    login = async (req : Request, res : Response)=>{
        const {email, password} = req.body
        const token = await this.loginUseCase.execute(email, password);
        if (!token){
            throw new ValidationError('Invalid email or password');
            return;
        }
        res.status(200).json({token: token})
    }
}

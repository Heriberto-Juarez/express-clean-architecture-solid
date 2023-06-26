import { UserRepositoryInterface } from "../interfaces/UserRepositoryInterface";
import { PasswordService } from "./PasswordService";
import {JwtService} from './JwtService'
import { injectable, inject } from "tsyringe";

@injectable()
export class LoginUseCase {
    
    constructor(
        @inject('UserRepository')
        private readonly userRepository : UserRepositoryInterface,
        @inject('PasswordService')
        private readonly passwordService : PasswordService,
        @inject('TokenService')
        private readonly jwtService : JwtService
    ){
    }

    async execute(email: string, password: string) : Promise<string | null>{
        const user = await this.userRepository.findByEmail(email);
        if (!user){
            return null;
        }
        const passwordMatched = await this.passwordService.comprarePasswords(password, user.password);
        if(!passwordMatched){
            return null;
        }
        const token = this.jwtService.generateToken(user);
        return token;
    }

}
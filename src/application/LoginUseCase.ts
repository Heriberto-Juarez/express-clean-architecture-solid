import { UserRepositoryInterface } from "../interfaces/UserRepositoryInterface";
import { PasswordService } from "./PasswordService";
import {JwtService} from './JwtService'

export class LoginUseCase {
    
    constructor(
        private readonly userRepository : UserRepositoryInterface,
        private readonly passwordService : PasswordService,
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
import { User } from "../domain/entities/User";

export interface TokenService {
    generateToken(user : User) : string;
    validateToken(token : string) : boolean;
}
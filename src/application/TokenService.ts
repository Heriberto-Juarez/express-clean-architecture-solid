import { User } from "../domain/User";

export interface TokenService {
    generateToken(user : User) : string;
    validateToken(token : string) : boolean;
}
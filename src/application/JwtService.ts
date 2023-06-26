import { User } from "../domain/entities/User";
import { TokenService } from "./TokenService";
import jwt from 'jsonwebtoken';

/**
 * This class is in charge of generating and validating JWT tokens used for authrentication.
 */
export class JwtService implements TokenService {
    generateToken(user : User): string {
        const data = {
            userId: user.id,
            email: user.email,
            name: user.name
        }
        return jwt.sign(data, `${process.env.TOKEN_SECRET}`);
    }
    validateToken(token: string): boolean {
        throw new Error("Not yet implemented.");
    }
}
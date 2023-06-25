import bcrypt from 'bcrypt';
import { PasswordService } from './PasswordService';

export class BcryptPasswordService implements PasswordService {
    
    async hashPassword(password: string): Promise<string> {
        const saltRounds = 10;
        return bcrypt.hash(password, saltRounds);
    }

    async comprarePasswords(password: string, hashedPassword: string): Promise<boolean> {
        return bcrypt.compare(password, hashedPassword);
    }

}
export interface PasswordService {
    hashPassword(password : string) : Promise<string>;
    comprarePasswords(password: string, hashedPassword : string) : Promise<boolean>;
}
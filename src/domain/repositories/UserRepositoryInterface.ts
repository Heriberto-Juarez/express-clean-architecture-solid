import { User } from "../entities/User";

export interface UserRepositoryInterface {
    save(user : User): Promise<void>;
    findByEmail(email : string) : Promise<User|null>
}
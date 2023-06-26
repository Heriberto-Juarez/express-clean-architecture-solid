import {container} from 'tsyringe';
import { CreateUserUseCase } from '../application/CreateUserUseCase';
import { UserRepository } from './UserRepository';
import { BcryptPasswordService } from '../application/BcryptPasswordService';
import { LoginUseCase } from '../application/LoginUseCase';
import { JwtService } from '../application/JwtService';
import { UserController } from '../presentation/user/UserController';


container.register<UserRepository>('UserRepository', {useClass: UserRepository});
container.register<BcryptPasswordService>('PasswordService', {useClass: BcryptPasswordService})
container.register<JwtService>('TokenService', {useClass: JwtService})
container.register<CreateUserUseCase>('CreateUserUseCase', {useClass: CreateUserUseCase});
container.register<LoginUseCase>('LoginUseCase', {useClass: LoginUseCase});
container.register<UserController>('UserController', {useClass: UserController});

export { container }
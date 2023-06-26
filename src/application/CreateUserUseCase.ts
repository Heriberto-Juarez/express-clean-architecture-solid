import { User } from "../domain/entities/User";
import { UserRepositoryInterface } from "../domain/repositories/UserRepositoryInterface";
import { PasswordService } from "./PasswordService";
import { injectable, inject } from "tsyringe";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('PasswordService')
    private readonly passwordService: PasswordService,
    @inject('UserRepository')
    private readonly userRepository: UserRepositoryInterface
  ) {}

  async execute(user: User): Promise<void> {
    const hashedPassword = await this.passwordService.hashPassword(user.password);
    const userWithHashedPassword = {
      ...user,
      password: hashedPassword,
    };
    await this.userRepository.save(userWithHashedPassword);
  }
}

import { User } from "../domain/User";
import { UserRepositoryInterface } from "../interfaces/UserRepositoryInterface";
import { PasswordService } from "./PasswordService";

export class CreateUserUseCase {
  constructor(
    private readonly passwordService: PasswordService,
    private readonly userRepository: UserRepositoryInterface
  ) {}

  async execute(user: User): Promise<void> {
    const hashedPassword = await this.passwordService.hashPassword(user.password);
    const userWithHashedPassword = {
      ...user,
      password: hashedPassword,
    };

    await this.userRepository.save(userWithHashedPassword);
    console.log('Registering user:', userWithHashedPassword);
  }
}

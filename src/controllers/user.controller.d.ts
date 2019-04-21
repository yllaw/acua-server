import { User } from '../models';
import { UserRepository } from '../repositories';
export declare class UserController {
    userRepository: UserRepository;
    constructor(userRepository: UserRepository);
    login(userSubmit: User): Promise<User | null>;
    logout(userSubmit: User): Promise<void>;
}

import { User } from '../models';
import { UserRepository } from '../repositories';
export declare class UserController {
    userRepository: UserRepository;
    constructor(userRepository: UserRepository);
    create(userSubmit: User): Promise<User | null>;
}

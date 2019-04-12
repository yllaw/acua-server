import { repository } from '@loopback/repository';
import {
  post,
  requestBody,
} from '@loopback/rest';
import { User } from '../models';
import { UserRepository } from '../repositories';

export class UserController {
  constructor(
    @repository(UserRepository)
    public userRepository: UserRepository,
  ) { }

  @post('/users/login', {
    responses: {
      '200': {
        description: 'User model instance',
        content: { 'application/json': { schema: { 'x-ts-type': User } } },
      },
    },
  })
  async create(@requestBody() userSubmit: User): Promise<User | null> {
    let user = await this.userRepository.findOne({ where: { username: userSubmit.username } })

    if (!user || user.password !== userSubmit.password)
      return null

    return user
  }
}

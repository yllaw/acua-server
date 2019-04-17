import { repository } from '@loopback/repository';
import {
  patch,
  requestBody,
} from '@loopback/rest';
import { User } from '../models';
import { UserRepository } from '../repositories';

export class UserController {
  constructor(
    @repository(UserRepository)
    public userRepository: UserRepository,
  ) { }

  @patch('/users/login', {
    responses: {
      '204': {
        description: 'User login',
        content: { 'application/json': { schema: { 'x-ts-type': User } } },
      },
    },
  })
  async login(@requestBody() userSubmit: User): Promise<User | null> {
    let user = await this.userRepository.findOne({ where: { username: userSubmit.username } })

    if (!user || user.password !== userSubmit.password)
      return null

    user.loggedIn = true

    await this.userRepository.replaceById(user.id, user)

    return user
  }

  @patch('/users/logout', {
    responses: {
      '204': {
        description: 'User logout',
        content: { 'application/json': { schema: { 'x-ts-type': User } } },
      },
    },
  })
  async logout(@requestBody() userSubmit: User): Promise<void> {
    let user = await this.userRepository.findOne({ where: { username: userSubmit.username } })

    if (user !== null) {
      user.loggedIn = false

      await this.userRepository.replaceById(user.id, user)
    }
  }
}

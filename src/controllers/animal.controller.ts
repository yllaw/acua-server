import {
  Filter,
  repository,
} from '@loopback/repository';

import {
  get,
} from '@loopback/rest';

import { Animal } from '../models'
import { AnimalRepository } from '../repositories';

export class AnimalController{

  constructor(
  @repository(AnimalRepository)
  public animalRepository: AnimalRepository) {

  }

  @get('/animals', {
    responses: {
      '200': {
        description: 'Array of Animal objects',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: { 'x-ts-type': Animal }
            },
          },
        },
      },
    },
  })

}

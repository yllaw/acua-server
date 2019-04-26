import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Animal} from '../models';
import {AnimalRepository} from '../repositories';

export class AnimalController {
  constructor(
    @repository(AnimalRepository)
    public animalRepository : AnimalRepository,
  ) {}

  @post('/animals', {
    responses: {
      '200': {
        description: 'Animal model instance',
        content: {'application/json': {schema: {'x-ts-type': Animal}}},
      },
    },
  })
  async create(@requestBody() animal: Animal): Promise<Animal> {
    return await this.animalRepository.create(animal);
  }

  @get('/animals/count', {
    responses: {
      '200': {
        description: 'Animal model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Animal)) where?: Where,
  ): Promise<Count> {
    return await this.animalRepository.count(where);
  }

  @get('/animals', {
    responses: {
      '200': {
        description: 'Array of Animal model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Animal}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Animal)) filter?: Filter,
  ): Promise<Animal[]> {
    return await this.animalRepository.find(filter);
  }

  @patch('/animals', {
    responses: {
      '200': {
        description: 'Animal PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() animal: Animal,
    @param.query.object('where', getWhereSchemaFor(Animal)) where?: Where,
  ): Promise<Count> {
    return await this.animalRepository.updateAll(animal, where);
  }

  @get('/animals/{id}', {
    responses: {
      '200': {
        description: 'Animal model instance',
        content: {'application/json': {schema: {'x-ts-type': Animal}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Animal> {
    return await this.animalRepository.findById(id);
  }

  @patch('/animals/{id}', {
    responses: {
      '204': {
        description: 'Animal PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() animal: Animal,
  ): Promise<void> {
    await this.animalRepository.updateById(id, animal);
  }

  @put('/animals/{id}', {
    responses: {
      '204': {
        description: 'Animal PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() animal: Animal,
  ): Promise<void> {
    await this.animalRepository.replaceById(id, animal);
  }

  @del('/animals/{id}', {
    responses: {
      '204': {
        description: 'Animal DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.animalRepository.deleteById(id);
  }
}

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
import { Faq } from '../models';
import { FaqRepository, UserRepository } from '../repositories';

export class FaqController {
  static windowGen: number = 0;
  static numberGen: number = 0;

  constructor(
    @repository(FaqRepository)
    public faqRepository: FaqRepository,
    @repository(UserRepository)
    public userRepository: UserRepository,
  ) { }

  @post('/faqs', {
    responses: {
      '200': {
        description: 'Faq model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Faq } } },
      },
    },
  })
  async create(@requestBody() faq: Faq): Promise<Faq | null> {
    const filter: Filter = { where: { loggedIn: true } };
    const windows = await this.userRepository.find(filter);

    if (windows.length === 0) {
      return null;
    }

    const window = windows[FaqController.windowGen++ % windows.length].window;
    faq.index = FaqController.numberGen++;
    faq.window = window;

    return await this.faqRepository.create(faq);
  }

  @get('/faqs/count', {
    responses: {
      '200': {
        description: 'Faq model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Faq)) where?: Where,
  ): Promise<Count> {
    return await this.faqRepository.count(where);
  }

  @get('/faqs', {
    responses: {
      '200': {
        description: 'Array of Faq model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Faq } },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Faq)) filter?: Filter,
  ): Promise<Faq[]> {
    return await this.faqRepository.find(filter);
  }

  @patch('/faqs', {
    responses: {
      '200': {
        description: 'Faq PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody() faq: Faq,
    @param.query.object('where', getWhereSchemaFor(Faq)) where?: Where,
  ): Promise<Count> {
    return await this.faqRepository.updateAll(faq, where);
  }

  @get('/faqs/{id}', {
    responses: {
      '200': {
        description: 'Faq model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Faq } } },
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Faq> {
    return await this.faqRepository.findById(id);
  }

  @patch('/faqs/{id}', {
    responses: {
      '204': {
        description: 'Faq PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() faq: Faq,
  ): Promise<void> {
    await this.faqRepository.updateById(id, faq);
  }

  @put('/faqs/{id}', {
    responses: {
      '204': {
        description: 'Faq PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() faq: Faq,
  ): Promise<void> {
    await this.faqRepository.replaceById(id, faq);
  }

  @del('/faqs/{id}', {
    responses: {
      '204': {
        description: 'Faq DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.faqRepository.deleteById(id);
  }
}

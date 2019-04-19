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
import { Ticket } from '../models';
import { TicketRepository, UserRepository } from '../repositories';
import { CronJob } from 'cron';

export class TicketController {
  static numberGen: number = 1;
  static windowGen: number = 0;

  public resetNumGen = new CronJob('00 00 00 * * *', () => {
    // resets the number and window generators everyday at midnight
    // 00: second 00: minute 00: hour *: days of month *: months *: days of week
    TicketController.numberGen = 1;
    TicketController.windowGen = 0;
    console.log(`Ticket Counter reset to ${TicketController.numberGen}`);
  }, () => { }, true, 'America/Los_Angeles');

  constructor(
    @repository(TicketRepository)
    public ticketRepository: TicketRepository,
    @repository(UserRepository)
    public userRepository: UserRepository
  ) {
    this.resetNumGen.start();
  }

  @post('/tickets', {
    responses: {
      '200': {
        description: 'Ticket model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Ticket } } },
      },
    },
  })
  async create(@requestBody() ticket: Ticket): Promise<Ticket | null> {
    // Tickets are only given to open windows
    const filter: Filter = { where: { loggedIn: true, location: ticket.location } };
    const windows = await this.userRepository.find(filter);

    if (windows.length === 0) {
      return null;
    }

    const window = windows[TicketController.windowGen++ % windows.length].window;

    ticket.number = TicketController.numberGen;
    ticket.index = TicketController.numberGen++;
    ticket.window = window;

    return await this.ticketRepository.create(ticket);
  }

  @get('/tickets/count', {
    responses: {
      '200': {
        description: 'Ticket model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Ticket)) where?: Where,
  ): Promise<Count> {
    return await this.ticketRepository.count(where);
  }

  @get('/tickets', {
    responses: {
      '200': {
        description: 'Array of Ticket model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Ticket } },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Ticket)) filter?: Filter,
  ): Promise<Ticket[]> {
    return await this.ticketRepository.find(filter);
  }

  @patch('/tickets', {
    responses: {
      '200': {
        description: 'Ticket PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody() ticket: Ticket,
    @param.query.object('where', getWhereSchemaFor(Ticket)) where?: Where,
  ): Promise<Count> {
    return await this.ticketRepository.updateAll(ticket, where);
  }

  @get('/tickets/{id}', {
    responses: {
      '200': {
        description: 'Ticket model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Ticket } } },
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Ticket> {
    return await this.ticketRepository.findById(id);
  }

  @patch('/tickets/{id}', {
    responses: {
      '204': {
        description: 'Ticket PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() ticket: Ticket,
  ): Promise<void> {
    await this.ticketRepository.updateById(id, ticket);
  }

  @put('/tickets/{id}', {
    responses: {
      '204': {
        description: 'Ticket PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() ticket: Ticket,
  ): Promise<void> {
    await this.ticketRepository.replaceById(id, ticket);
  }

  @del('/tickets/{id}', {
    responses: {
      '204': {
        description: 'Ticket DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.ticketRepository.deleteById(id);
  }
}

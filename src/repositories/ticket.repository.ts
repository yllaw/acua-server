import {DefaultCrudRepository} from '@loopback/repository';
import {Ticket} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TicketRepository extends DefaultCrudRepository<
  Ticket,
  typeof Ticket.prototype.id
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Ticket, dataSource);
  }
}

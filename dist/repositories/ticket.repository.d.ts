import { DefaultCrudRepository } from '@loopback/repository';
import { Ticket } from '../models';
import { MongoDataSource } from '../datasources';
export declare class TicketRepository extends DefaultCrudRepository<Ticket, typeof Ticket.prototype.id> {
    constructor(dataSource: MongoDataSource);
}

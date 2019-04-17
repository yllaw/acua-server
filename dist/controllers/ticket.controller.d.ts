import { Count, Filter, Where } from '@loopback/repository';
import { Ticket } from '../models';
import { TicketRepository } from '../repositories';
export declare class TicketController {
    ticketRepository: TicketRepository;
    static numberGen: number;
    static windowGen: number;
    constructor(ticketRepository: TicketRepository);
    create(ticket: Ticket): Promise<Ticket>;
    count(where?: Where): Promise<Count>;
    find(filter?: Filter): Promise<Ticket[]>;
    updateAll(ticket: Ticket, where?: Where): Promise<Count>;
    findById(id: string): Promise<Ticket>;
    updateById(id: string, ticket: Ticket): Promise<void>;
    replaceById(id: string, ticket: Ticket): Promise<void>;
    deleteById(id: string): Promise<void>;
}

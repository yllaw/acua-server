import { Count, Filter, Where } from '@loopback/repository';
import { Ticket } from '../models';
import { TicketRepository, UserRepository } from '../repositories';
import { CronJob } from 'cron';
interface locationGen {
    'Agoura': number;
    'Baldwin Park': number;
    'Carson/Gardena': number;
    'Castaic': number;
    'Downey': number;
    'Lancaster': number;
    'Palmdale': number;
    [key: string]: number;
}
export declare class TicketController {
    ticketRepository: TicketRepository;
    userRepository: UserRepository;
    static numberGen: locationGen;
    static windowGen: number;
    resetNumGen: CronJob;
    constructor(ticketRepository: TicketRepository, userRepository: UserRepository);
    create(ticket: Ticket): Promise<Ticket | null>;
    count(where?: Where): Promise<Count>;
    find(filter?: Filter): Promise<Ticket[]>;
    updateAll(ticket: Ticket, where?: Where): Promise<Count>;
    findById(id: string): Promise<Ticket>;
    updateById(id: string, ticket: Ticket): Promise<void>;
    replaceById(id: string, ticket: Ticket): Promise<void>;
    deleteById(id: string): Promise<void>;
}
export {};

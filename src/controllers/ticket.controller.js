"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
const cron_1 = require("cron");
let TicketController = class TicketController {
    constructor(ticketRepository, userRepository) {
        this.ticketRepository = ticketRepository;
        this.userRepository = userRepository;
        this.resetNumGen = new cron_1.CronJob('00 00 00 * * *', () => {
            // resets the number and window generators everyday at midnight
            // 00: second 00: minute 00: hour *: days of month *: months *: days of week
            TicketController.numberGen = {
                'Agoura': 1,
                'Baldwin Park': 1,
                'Carson/Gardena': 1,
                'Castaic': 1,
                'Downey': 1,
                'Lancaster': 1,
                'Palmdale': 1,
            };
            TicketController.windowGen = 0;
            console.log(`Ticket Counter reset to ${TicketController.numberGen.Downey}`);
        }, () => { }, true, 'America/Los_Angeles');
        this.resetNumGen.start();
    }
    async create(ticket) {
        // Tickets are only given to open windows
        const filter = { where: { loggedIn: true, location: ticket.location } };
        const windows = await this.userRepository.find(filter);
        if (windows.length === 0) {
            return null;
        }
        const window = windows[TicketController.windowGen++ % windows.length].window;
        ticket.number = TicketController.numberGen[ticket.location];
        ticket.index = TicketController.numberGen[ticket.location]++;
        ticket.window = window;
        return await this.ticketRepository.create(ticket);
    }
    async count(where) {
        return await this.ticketRepository.count(where);
    }
    async find(filter) {
        return await this.ticketRepository.find(filter);
    }
    async updateAll(ticket, where) {
        return await this.ticketRepository.updateAll(ticket, where);
    }
    async findById(id) {
        return await this.ticketRepository.findById(id);
    }
    async updateById(id, ticket) {
        await this.ticketRepository.updateById(id, ticket);
    }
    async replaceById(id, ticket) {
        await this.ticketRepository.replaceById(id, ticket);
    }
    async deleteById(id) {
        await this.ticketRepository.deleteById(id);
    }
};
TicketController.numberGen = {
    'Agoura': 1,
    'Baldwin Park': 1,
    'Carson/Gardena': 1,
    'Castaic': 1,
    'Downey': 1,
    'Lancaster': 1,
    'Palmdale': 1,
};
TicketController.windowGen = 0;
__decorate([
    rest_1.post('/tickets', {
        responses: {
            '200': {
                description: 'Ticket model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Ticket } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Ticket]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "create", null);
__decorate([
    rest_1.get('/tickets/count', {
        responses: {
            '200': {
                description: 'Ticket model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Ticket))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "count", null);
__decorate([
    rest_1.get('/tickets', {
        responses: {
            '200': {
                description: 'Array of Ticket model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Ticket } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Ticket))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "find", null);
__decorate([
    rest_1.patch('/tickets', {
        responses: {
            '200': {
                description: 'Ticket PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Ticket))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Ticket, Object]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/tickets/{id}', {
        responses: {
            '200': {
                description: 'Ticket model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Ticket } } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "findById", null);
__decorate([
    rest_1.patch('/tickets/{id}', {
        responses: {
            '204': {
                description: 'Ticket PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Ticket]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "updateById", null);
__decorate([
    rest_1.put('/tickets/{id}', {
        responses: {
            '204': {
                description: 'Ticket PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Ticket]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/tickets/{id}', {
        responses: {
            '204': {
                description: 'Ticket DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "deleteById", null);
TicketController = __decorate([
    __param(0, repository_1.repository(repositories_1.TicketRepository)),
    __param(1, repository_1.repository(repositories_1.UserRepository)),
    __metadata("design:paramtypes", [repositories_1.TicketRepository,
        repositories_1.UserRepository])
], TicketController);
exports.TicketController = TicketController;
//# sourceMappingURL=ticket.controller.js.map
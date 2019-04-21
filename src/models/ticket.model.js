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
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
let Ticket = class Ticket extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
__decorate([
    repository_1.property({
        type: 'string',
        id: true,
    }),
    __metadata("design:type", String)
], Ticket.prototype, "id", void 0);
__decorate([
    repository_1.property({
        type: 'number'
    }),
    __metadata("design:type", Number)
], Ticket.prototype, "number", void 0);
__decorate([
    repository_1.property({
        type: 'number'
    }),
    __metadata("design:type", Number)
], Ticket.prototype, "index", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], Ticket.prototype, "phone", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], Ticket.prototype, "name", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], Ticket.prototype, "query", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], Ticket.prototype, "location", void 0);
__decorate([
    repository_1.property({
        type: 'number',
    }),
    __metadata("design:type", Number)
], Ticket.prototype, "window", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        default: 0,
    }),
    __metadata("design:type", Number)
], Ticket.prototype, "strikes", void 0);
__decorate([
    repository_1.property({
        type: 'boolean',
        default: false,
    }),
    __metadata("design:type", Boolean)
], Ticket.prototype, "isComplete", void 0);
Ticket = __decorate([
    repository_1.model(),
    __metadata("design:paramtypes", [Object])
], Ticket);
exports.Ticket = Ticket;
//# sourceMappingURL=ticket.model.js.map
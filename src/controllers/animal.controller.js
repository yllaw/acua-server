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
let AnimalController = class AnimalController {
    constructor(AnimalRepository) {
        this.AnimalRepository = AnimalRepository;
    }
};
__decorate([
    rest_1.get('/animals', {
        responses: {
            '200': {
                description: 'Array of Animal objects',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Animal } },
                    },
                },
            },
        },
    }),
    __metadata("design:type", Object)
], AnimalController.prototype, "", void 0);
AnimalController = __decorate([
    __param(0, repository_1.repository(repositories_1.AnimalRepository)),
    __metadata("design:paramtypes", [repositories_1.AnimalRepository])
], AnimalController);
exports.AnimalController = AnimalController;
//# sourceMappingURL=animal.controller.js.map
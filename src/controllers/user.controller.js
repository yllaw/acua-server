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
let UserController = class UserController {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async login(userSubmit) {
        let user = await this.userRepository.findOne({ where: { username: userSubmit.username } });
        if (!user || user.password !== userSubmit.password)
            return null;
        user.loggedIn = true;
        await this.userRepository.replaceById(user.id, user);
        return user;
    }
    async logout(userSubmit) {
        let user = await this.userRepository.findOne({ where: { username: userSubmit.username } });
        if (user !== null) {
            user.loggedIn = false;
            await this.userRepository.replaceById(user.id, user);
        }
    }
};
__decorate([
    rest_1.patch('/users/login', {
        responses: {
            '204': {
                description: 'User login',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.User } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.User]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
__decorate([
    rest_1.patch('/users/logout', {
        responses: {
            '204': {
                description: 'User logout',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.User } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.User]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "logout", null);
UserController = __decorate([
    __param(0, repository_1.repository(repositories_1.UserRepository)),
    __metadata("design:paramtypes", [repositories_1.UserRepository])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map
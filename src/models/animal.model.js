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
let Animal = class Animal extends repository_1.Entity {
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
], Animal.prototype, "animal_id", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true
    }),
    __metadata("design:type", String)
], Animal.prototype, "animal_name", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true
    }),
    __metadata("design:type", String)
], Animal.prototype, "animal_type", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], Animal.prototype, "sex", void 0);
__decorate([
    repository_1.property({
        type: 'number',
    }),
    __metadata("design:type", Number)
], Animal.prototype, "years_old", void 0);
__decorate([
    repository_1.property({
        type: 'number',
    }),
    __metadata("design:type", Number)
], Animal.prototype, "months_old", void 0);
__decorate([
    repository_1.property({
        type: 'date',
        required: true,
    }),
    __metadata("design:type", Date)
], Animal.prototype, "dob", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Animal.prototype, "color_group", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", Number)
], Animal.prototype, "primary_color", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Animal.prototype, "secondary_color", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Animal.prototype, "markings", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Animal.prototype, "animal_cond", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Animal.prototype, "animal_stat", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Animal.prototype, "status_date", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Animal.prototype, "bites", void 0);
__decorate([
    repository_1.property({
        type: 'string'
    }),
    __metadata("design:type", String)
], Animal.prototype, "animal_size", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Animal.prototype, "coat", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Animal.prototype, "ears", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Animal.prototype, "tail", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Animal.prototype, "legs", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Animal.prototype, "collar_type", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Animal.prototype, "vet_id", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Animal.prototype, "s_n_due_date", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Animal.prototype, "s_n_comp_date", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Animal.prototype, "voucher_no", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Animal.prototype, "cntract_exp_date", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Animal.prototype, "location", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Animal.prototype, "userid", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Animal.prototype, "stamp", void 0);
Animal = __decorate([
    repository_1.model(),
    __metadata("design:paramtypes", [Object])
], Animal);
exports.Animal = Animal;
//# sourceMappingURL=animal.model.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftsController = void 0;
var common_1 = require("@nestjs/common");
var client_1 = require("@prisma/client");
var roles_decorator_1 = require("../auth/decorators/roles.decorator");
var ShiftsController = /** @class */ (function () {
    function ShiftsController(shiftsService) {
        this.shiftsService = shiftsService;
    }
    ShiftsController.prototype.getShifts = function (filters) { };
    ShiftsController.prototype.createShift = function (data) { };
    ShiftsController.prototype.applyForShift = function (id) { };
    ShiftsController.prototype.assignShift = function (id, data) { };
    __decorate([
        (0, common_1.Get)(),
        __param(0, (0, common_1.Query)())
    ], ShiftsController.prototype, "getShifts", null);
    __decorate([
        (0, common_1.Post)(),
        (0, roles_decorator_1.Roles)(client_1.UserRole.FACILITY_MANAGER),
        __param(0, (0, common_1.Body)())
    ], ShiftsController.prototype, "createShift", null);
    __decorate([
        (0, common_1.Post)(":id/apply"),
        (0, roles_decorator_1.Roles)(client_1.UserRole.HEALTHCARE_PROFESSIONAL),
        __param(0, (0, common_1.Param)("id"))
    ], ShiftsController.prototype, "applyForShift", null);
    __decorate([
        (0, common_1.Put)(":id/assign"),
        (0, roles_decorator_1.Roles)(client_1.UserRole.FACILITY_MANAGER),
        __param(0, (0, common_1.Param)("id")),
        __param(1, (0, common_1.Body)())
    ], ShiftsController.prototype, "assignShift", null);
    ShiftsController = __decorate([
        (0, common_1.Controller)("shifts")
    ], ShiftsController);
    return ShiftsController;
}());
exports.ShiftsController = ShiftsController;

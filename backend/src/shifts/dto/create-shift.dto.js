"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateShiftDto = void 0;
var class_validator_1 = require("class-validator");
var CreateShiftDto = /** @class */ (function () {
    function CreateShiftDto() {
    }
    __decorate([
        (0, class_validator_1.IsDateString)({})
    ], CreateShiftDto.prototype, "startTime", void 0);
    __decorate([
        (0, class_validator_1.IsDateString)({})
    ], CreateShiftDto.prototype, "endTime", void 0);
    __decorate([
        (0, class_validator_1.IsUUID)()
    ], CreateShiftDto.prototype, "facilityId", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsOptional)()
    ], CreateShiftDto.prototype, "requirements", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)()
    ], CreateShiftDto.prototype, "notes", void 0);
    return CreateShiftDto;
}());
exports.CreateShiftDto = CreateShiftDto;

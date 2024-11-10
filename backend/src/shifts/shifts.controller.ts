import { Controller, Get, Post, Put, Body, Param, Query } from "@nestjs/common";
import { ShiftsService } from "./shifts.service";
import {
  CreateShiftDto,
  UpdateShiftDto,
  AssignShiftDto,
  ShiftFilters,
} from "./dto";
import { UserRole } from "@prisma/client";
import { Roles } from "../auth/decorators/roles.decorator";

@Controller("shifts")
export class ShiftsController {
  constructor(private readonly shiftsService: ShiftsService) {}

  @Get()
  getShifts(@Query() filters: ShiftFilters) {}

  @Post()
  @Roles(UserRole.FACILITY_MANAGER)
  createShift(@Body() data: CreateShiftDto) {}

  @Post(":id/apply")
  @Roles(UserRole.HEALTHCARE_PROFESSIONAL)
  async applyForShift(@Param("id") id: string, userId: string) {
    return this.shiftsService.applyForShift(id);
  }

  @Put(":id/assign")
  @Roles(UserRole.FACILITY_MANAGER)
  assignShift(@Param("id") id: string, @Body() data: AssignShiftDto) {}
}

import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import {
  CreateShiftDto,
  UpdateShiftDto,
  AssignShiftDto,
  ShiftFilters,
} from "./dto";
import { ShiftStatus } from "@prisma/client";

@Injectable()
export class ShiftsService {
  constructor(private prisma: PrismaService) {}

  async createShift(data: CreateShiftDto) {
    // Create shift logic
  }

  async findShift(id: string) {
    return this.prisma.shift.findUnique({
      where: { id },
    });
  }

  async applyForShift(id: string) {
    const shift = await this.findShift(id);
    if (!shift) {
      throw new NotFoundException("Shift not found");
    }
    if (shift.status !== "OPEN") {
      throw new BadRequestException("Shift is not available");
    }

    // Update shift status to FILLED
    return this.prisma.shift.update({
      where: { id },
      data: { status: ShiftStatus.COMPLETED },
    });
  }

  async getAvailableShifts(filters: ShiftFilters) {
    // Get available shifts logic
  }
}

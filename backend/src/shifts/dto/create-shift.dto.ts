import {
  IsDateString,
  IsString,
  IsArray,
  IsOptional,
  IsUUID,
} from "class-validator";

export class CreateShiftDto {
  @IsDateString({})
  startTime: Date;

  @IsDateString({})
  endTime: Date;

  @IsUUID()
  facilityId: string;

  @IsArray()
  @IsOptional()
  requirements?: string[];

  @IsString()
  @IsOptional()
  notes?: string;
}

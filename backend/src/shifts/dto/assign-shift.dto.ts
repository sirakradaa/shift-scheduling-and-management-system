import { IsUUID, IsNotEmpty } from "class-validator";

export class AssignShiftDto {
  @IsUUID()
  @IsNotEmpty()
  userId: string;
}

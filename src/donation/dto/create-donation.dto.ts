import { Type } from "class-transformer";
import { IsInt, IsString } from "class-validator";

export class CreateDonationDto {
  @IsString()
  currency: string;

  @IsInt()
  @Type(() => Number)
  amount: number;

  @IsString()
  senderName: string;

  @IsString()
  message: string;

  @IsInt()
  @Type(() => Number)
  recipientId: number;
}


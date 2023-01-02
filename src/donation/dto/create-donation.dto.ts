import { Type } from "class-transformer";
import { IsIn, IsInt, IsNumber, IsString } from "class-validator";

export class CreateDonationDto {
  @IsString()
  currency: string;

  @IsInt()
  @Type(() => Number)
  amount: number;

  @IsString()
  senderName: string;

  @IsIn(['fondy', 'manual'])
  paymentSystem: 'fondy' | 'manual'

  @IsIn(['progress', 'success', 'fail'])
  paymentStatus: 'progress' | 'success' | 'fail'

  @IsString()
  paymentData?: string;

  @IsInt()
  recipientId: number;
}


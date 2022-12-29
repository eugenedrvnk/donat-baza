import { Prisma } from "@prisma/client";
import { Type } from "class-transformer";
import { IsIn, IsInt, IsJSON, IsNumber, IsObject, IsString } from "class-validator";

type Test = Record<string, string>;

export class CreateDonationDto {
  // @IsString()
  // currency: string;

  // @IsInt()
  // @Type(() => Number)
  // amount: number;

  // @IsString()
  // senderName: string;

  // @IsIn(['fondy', 'manual'])
  // paymentSystem: 'fondy' | 'manual'

  // @IsIn(['progress', 'success', 'fail'])
  // paymentStatus: 'progress' | 'success' | 'fail'

  @IsJSON()
  // @Type(() => Test)
  paymentData: Test;

  // @IsInt()
  // recipientId: number;
}

import { Type } from "class-transformer";
import { IsInt, IsString } from "class-validator";

export class CreatePaymentDto {
  @IsInt()
  @Type(() => Number)
  amount: number;

  @IsString()
  currency: string;
  
  @IsString()
  description: string;
  
  @IsString()
  redirectUrl: string;
}

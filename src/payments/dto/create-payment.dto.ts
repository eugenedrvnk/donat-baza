import { Type } from "class-transformer";
import { IsIn, IsInt, IsString } from "class-validator";

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

  @IsIn(['FONDY'])
  provider: 'FONDY'
}

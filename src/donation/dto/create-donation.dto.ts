import { IsIn, IsInt, IsString } from "class-validator";
import { IsJsonable } from "src/common/class-validator/json-validation";
import { JSONValue } from "src/common/types";

export class CreateDonationDto {
  @IsString()
  currency: string;

  @IsInt()
  amount: number;

  @IsString()
  senderName: string;

  @IsIn(['fondy', 'manual'])
  paymentSystem: 'fondy' | 'manual'

  @IsIn(['progress', 'success', 'fail'])
  paymentStatus: 'progress' | 'success' | 'fail'

  @IsJsonable()
  paymentData: JSONValue;
}

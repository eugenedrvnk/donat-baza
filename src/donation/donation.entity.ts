import { JsonValue } from "src/common/types";
import { BaseEntity } from "src/database/base.entity";

export class DonationEntity extends BaseEntity {
  currency: string;
  amount: number;
  senderName: string;
  paymentSystem: 'fondy' | 'manual';
  paymentStatus: 'progress' | 'success' | 'fail';
  paymentData: JsonValue | null;
}
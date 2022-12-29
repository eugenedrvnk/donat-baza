import { BaseEntity } from "src/database/base.entity";

export class PaymentEntity extends BaseEntity {
    amount: number;
    currency: string;
    description: string;
    provider: 'FONDY';
    status: 'SUCCESS' | 'FAIL' | 'PROGRESS'
}
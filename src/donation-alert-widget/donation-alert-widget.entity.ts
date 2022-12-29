import { BaseEntity } from "src/common/base.entity";

class DonationALertWidgetEntity extends BaseEntity {
    text: string;
    minAmount: number | null;
    maxAmount: number | null;
    specificAmount: number | null;
}
import { CreatePaymentDto } from "./dto/create-payment.dto";

export abstract class PaymentsService {
  abstract getRedirectUrl: (
    params: Pick<CreatePaymentDto, 'amount' | 'description' | 'currency'>,
  ) => Promise<string>;
}
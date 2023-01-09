export class PaymentsServiceError extends Error {
  constructor() {
    super("Payments service responded with error");
  }
}
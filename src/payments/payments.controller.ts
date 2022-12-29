import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { PaymentsService } from './payments.types';

@Controller('payments')
export class PaymentsController {
  constructor(
    private readonly paymentsService: PaymentsService,
  ) { }

  @Get('init')
  async init(
    @Query() dto: CreatePaymentDto,
    @Res() res: Response,
  ) {
    res.redirect(await this.paymentsService.getRedirectUrl({
       amount: 125,
      currency: 'USD',
      description: 'description'
    }))
  }

  @Post('fondy-callback')
  redirect(@Body() body) {
    return body;
  }
}

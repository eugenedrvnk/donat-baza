import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { SocketService } from 'src/socket/socket.service';
import { DonationsService } from './donations.service';
import { CreateDonationDto } from './dto/create-donation.dto';
import { FondyPaymentsService } from './fondy-payments.service';

@Controller('donations')
export class DonationsController {
  constructor(
    private readonly socketService: SocketService,
    private readonly donationsService: DonationsService,
    private readonly fondyPaymentsService: FondyPaymentsService,
  ) { }

  @Get('test')
  get(@Res() res: Response) {
    res.redirect(301, 'http://localhost:3000/donations/r')
  }

  @Get('r')
  r() {
    return 'get'
  }

  @Post('p')
  p() {
    return 'post'
  }

  @Get('init')
  async create(
    @Query() dto: CreateDonationDto,
    @Res() res: Response,
  ) {   
    const donation = await this.donationsService.create({ ...dto });
    res.redirect(
      await this.fondyPaymentsService.getRedirectUrl({
        donation,
        callbackUrlPath: 'donations/callback',
      })
    )
  }

  @Post('callback')
  async callback(@Body() data) {
    console.log(data);
    return 'callback'
  }

  @Get('success-payment')
  handleSuccessPayment() {
    this.socketService.emitDonationEvent({
      token: 'test-token',
      donation: {
        id: 123,
        amount: 300,
        sender: 'test-sender',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    })
  }
}

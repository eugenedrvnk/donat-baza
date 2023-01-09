import { Controller, Get, Post, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { SocketService } from 'src/socket/socket.service';
import { CreateDonationDto } from './dto/create-donation.dto';
import { FondyPaymentsService } from './fondy-payments.service';

@Controller('donations')
export class DonationController {
  constructor(
    private readonly socketService: SocketService,
    private readonly fondyPaymentsService: FondyPaymentsService,
  ) { }

  @Get('init')
  async create(
    @Query() dto: CreateDonationDto,
    @Res() res: Response,
  ) {
    res.redirect(await this.fondyPaymentsService.getRedirectUrl({
      ...dto,
      callbackUrlPath: 'donations/callback'
    }));
  }

  @Post('callback')
  async callback(data) {
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

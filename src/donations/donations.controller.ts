import { Controller, Get, Post, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { PrismaService } from 'src/database/prisma.service';
import { SocketService } from 'src/socket/socket.service';
import { DonationsService } from './donations.service';
import { CreateDonationDto } from './dto/create-donation.dto';
import { FondyPaymentsService } from './fondy-payments.service';

@Controller('donations')
export class DonationsController {
  constructor(
    private readonly socketService: SocketService,
    private readonly fondyPaymentsService: FondyPaymentsService,
    private readonly prisma: PrismaService,
    private readonly donations: DonationsService,
  ) { }

  @Get('init')
  async create(
    @Query() dto: CreateDonationDto,
    @Res() res: Response,
  ) {
    await this.donations.create(dto);
    // await this.prisma.donation.create({ data: dto })

    // res.redirect((() => {throw new Error('lol')})());
    // let url
    // try {
    //   url = await this.fondyPaymentsService.getRedirectUrl({
    //     ...dto,
    //     callbackUrlPath: 'donations/callback'
    //   });
    // } catch (err) {
    //   console.log('err');
    // }
    
    res.json ({x:  1});
    // res.redirect(url);
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

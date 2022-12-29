import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { SocketService } from 'src/socket/socket.service';
import { CreateDonationDto } from './dto/create-donation.dto';

@Controller('donations')
export class DonationController {
  constructor(
    private readonly socketService: SocketService,
  ) { }

  @Post('')
  create(
    @Query() query,
    @Body() body,
  ) {
    console.log("body", body);
    console.log("query", query);
    return { query, body };
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

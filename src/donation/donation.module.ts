import { Module } from '@nestjs/common';
import { DonationService } from './donation.service';
import { DonationController } from './donation.controller';
import { SocketModule } from 'src/socket/socket.module';
import { PrismaService } from 'src/database/prisma.service';
import { FondyPaymentsService } from './fondy-payments.service';
import { UtilsModule } from 'src/utils/utils.module';

@Module({
  imports: [SocketModule, UtilsModule],
  providers: [DonationService, PrismaService, FondyPaymentsService],
  controllers: [DonationController]
})
export class DonationModule {}

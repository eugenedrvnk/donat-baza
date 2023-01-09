import { Module } from '@nestjs/common';
import { DonationsService } from './donations.service';
import { DonationsController } from './donations.controller';
import { SocketModule } from 'src/socket/socket.module';
import { PrismaService } from 'src/database/prisma.service';
import { FondyPaymentsService } from './fondy-payments.service';
import { UtilsModule } from 'src/utils/utils.module';

@Module({
  imports: [SocketModule, UtilsModule],
  providers: [DonationsService, PrismaService, FondyPaymentsService],
  controllers: [DonationsController]
})
export class DonationsModule {}

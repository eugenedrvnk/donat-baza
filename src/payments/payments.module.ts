import { Module } from '@nestjs/common';
import { UtilsModule } from 'src/utils/utils.module';
import { PaymentsController } from './payments.controller';
import { BasePaymentsService } from './payments.service';
import { PaymentsService } from './payments.types';

@Module({
  imports: [UtilsModule],
  providers: [{
    provide: PaymentsService,
    useClass: BasePaymentsService,
  }],
  controllers: [PaymentsController],
})
export class PaymentsModule { }

import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { SettingsModule } from './settings/settings.module';
import { UsersModule } from './users/users.module';
import { OauthProvidersModule } from './oauth-providers/oauth-providers.module';
import { DonationModule } from './donation/donation.module';
import { SocketModule } from './socket/socket.module';
import { LoggerModule } from './logger/logger.module';
import { UtilsModule } from './utils/utils.module';
import { DonationAlertWidgetModule } from './donation-alert-widget/donation-alert-widget.module';

@Module({
  imports: [
    AuthModule,
    SettingsModule,
    UsersModule,
    OauthProvidersModule,
    DonationModule,
    SocketModule,
    LoggerModule,
    UtilsModule,
    DonationAlertWidgetModule
  ],
})
export class AppModule { }

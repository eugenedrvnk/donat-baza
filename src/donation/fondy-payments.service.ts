import { Injectable } from '@nestjs/common';

import * as Fondy from 'cloudipsp-node-js-sdk';
import * as crypto from 'crypto';

import { SettingsService } from 'src/settings/settings.types';
import { UrlUtils } from 'src/utils/url.types';
import { CreateDonationDto } from './dto/create-donation.dto';

const fondy = new Fondy(
  {
    merchantId: 1396424,
    secretKey: 'test'
  }
)

@Injectable()
export class FondyPaymentsService {
  constructor(
    private readonly settingsService: SettingsService,
    private readonly urlUtils: UrlUtils,
  ) { }

  private readonly fondyClient = new Fondy({
    merchantId: 1396424,
    secretKey: 'test'
  })

  //@ts-ignore
  getRedirectUrl = async (params: Pick<CreateDonationDto, 'amount' | 'currency'>): Promise<string> => {
    const requestData = {
      order_id: crypto.randomBytes(64).toString('hex'),
      currency: params.currency,
      amount: params.amount,
      response_url: "https://731f-93-74-97-118.eu.ngrok.io/payments/redirect?query=test",
      server_callback_url: "https://731f-93-74-97-118.eu.ngrok.io/payments/console"
    }

    const res = await this.fondyClient.Checkout(requestData);
    return res.checkout_url;
  }
}
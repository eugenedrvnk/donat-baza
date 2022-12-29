import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';
import * as sha1 from 'sha1';
import { PaymentsService } from './payments.types';
import { SettingsService } from 'src/settings/settings.types';
import { UrlUtils } from 'src/utils/url.types';
const CloudIpsp = require('cloudipsp-node-js-sdk')

const fondy = new CloudIpsp(
  {
    merchantId: 1396424,
    secretKey: 'test'
  }
)

@Injectable()
export class BasePaymentsService implements PaymentsService {
  constructor(
    private readonly settingsService: SettingsService,
    private readonly urlUtils: UrlUtils,
  ) { }

  private readonly fondyClient = new CloudIpsp({
    merchantId: 1396424,
    secretKey: 'test'
  })

  getRedirectUrl: PaymentsService['getRedirectUrl'] = async (params) => {
    const requestData = {
      order_id: crypto.randomBytes(64).toString('hex'),
      order_desc: params.description,
      currency: params.currency,
      amount: params.amount,
      response_url: "https://731f-93-74-97-118.eu.ngrok.io/payments/redirect?query=test",
      server_callback_url: "https://731f-93-74-97-118.eu.ngrok.io/payments/console"
    }

    const res = await this.fondyClient.Checkout(requestData);
    return res.checkout_url;
  }
}

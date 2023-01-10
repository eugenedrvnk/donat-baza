import { Injectable } from '@nestjs/common';

import * as Fondy from 'cloudipsp-node-js-sdk';
import * as crypto from 'crypto';

import { SettingsService } from 'src/settings/settings.types';
import { UrlUtils } from 'src/utils/url.types';
import { DonationEntity } from './donations.entity';
import { DonationsService } from './donations.service';

type GetRedirectUrl = (
  params: {
    donation: DonationEntity,
    callbackUrlPath: string
  }) => Promise<string>;

@Injectable()
export class FondyPaymentsService {
  constructor(
    private readonly settingsService: SettingsService,
    private readonly urlUtils: UrlUtils,
    private readonly donationsService: DonationsService,
  ) { }

  private readonly fondyClient = new Fondy({
    merchantId: 1396424,
    secretKey: 'test'
  })

  getRedirectUrl: GetRedirectUrl = async (
    { donation: { id, amount, currency, message, }, callbackUrlPath }) => {

    const requestData = {
      order_id: crypto.randomBytes(64).toString('hex'),
      order_desc: message,
      currency,
      amount,
      response_url: this.urlUtils.buildUrl({
        url: `${this.settingsService.backAppUrl}/${callbackUrlPath}`,
        query: {}
      }),
    }

    const res = await this.fondyClient.Checkout(requestData);
    return res.checkout_url;
  }
}
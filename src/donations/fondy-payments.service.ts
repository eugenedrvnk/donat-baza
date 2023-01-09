import { Injectable } from '@nestjs/common';

import * as Fondy from 'cloudipsp-node-js-sdk';
import * as crypto from 'crypto';

import { SettingsService } from 'src/settings/settings.types';
import { UrlUtils } from 'src/utils/url.types';
import { DonationsService } from './donations.service';

type GetRedirectUrl = (params: {
  amount: number;
  currency: string;
  message: string;
  recipientId: number;
  senderName: string;
  callbackUrlPath: string;
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
    {
      amount,
      currency,
      message,
      recipientId,
      senderName,
      callbackUrlPath,
    }) => {
      const donation = this.donationsService.create({
        amount,
        currency,
        message,
        recipientId,
        senderName,
        paymentSystem: 'fondy',
      })
    
      const requestData = {
      order_id: crypto.randomBytes(64).toString('hex'),
      order_desc: message,
      currency,
      amount,
      response_url: this.urlUtils.buildUrl({
        url: `${this.settingsService.backAppUrl}/${callbackUrlPath}`,
        query: {
          recipientId,
          senderName,
        }
      }),
    }

    const res = await this.fondyClient.Checkout(requestData);
    return res.checkout_url;
  }
}
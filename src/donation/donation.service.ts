import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { DonationEntity } from './donation.entity';
import { CreateDonationDto } from './dto/create-donation.dto';

type JSONValue =
    | string
    | number
    | boolean
    | null
    | { [x: string]: JSONValue }
    | Array<JSONValue>;

@Injectable()
export class DonationService {
  constructor(
    private prisma: PrismaService,
  ) { }

  async create(data: CreateDonationDto): Promise<DonationEntity> {
    //@ts-ignore
    const donation = await this.prisma.donation.create({ data: { ...data, paymentData: null } });
    return {
      ...donation,
      paymentData: (donation.paymentData) as DonationEntity['paymentData'],
    }
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { DonationEntity } from './donations.entity';
import { CreateDonationDto } from './dto/create-donation.dto';

@Injectable()
export class DonationsService {
  constructor(
    private prisma: PrismaService,
  ) { }

  async create(data: CreateDonationDto): Promise<DonationEntity | void> {

    try {
      const donation = await this.prisma.donation.create({ data });
      return donation
    } catch (err) {
    throw err;
    }
    // return this.prisma.donation.create({data});
  }


}

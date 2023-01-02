import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { DonationEntity } from './donation.entity';
import { CreateDonationDto } from './dto/create-donation.dto';

@Injectable()
export class DonationService {
  constructor(
    private prisma: PrismaService,
  ) { }

  async create(data: CreateDonationDto & {recipientId: number}): Promise<DonationEntity> {
    return this.prisma.donation.create({ data: {...data} });
  }
}

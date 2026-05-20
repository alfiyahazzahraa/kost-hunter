import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../Prisma/prisma.service';
import { CreateKosDto } from './dto/create-kos.dto';
import { UpdateKosDto } from './dto/update-kos.dto';

@Injectable()
export class KosService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateKosDto) {
    try {
      return await this.prisma.kos.create({
        data: {
          user_id: dto.user_id,
          name: dto.name,
          address: dto.address,
          price_per_month: dto.price_per_month,
          gender: dto.gender,
        },
      });
    } catch (error) {
      console.log('ERROR CREATE KOS:', error);

      throw new BadRequestException(
        error?.meta?.field_name
          ? `Foreign key error: ${error.meta.field_name}`
          : 'Failed to create Kos',
      );
    }
  }

  findAll() {
    return this.prisma.kos.findMany({
      include: {
        user: true,
        reviews: true,
        bookings: true,
      },
    });
  }

  async findOne(id: number) {
    const kos = await this.prisma.kos.findUnique({
      where: { id },
      include: {
        user: true,
      },
    });

    if (!kos) throw new NotFoundException('Kos not found');
    return kos;
  }

  async update(id: number, dto: UpdateKosDto) {
    await this.findOne(id);

    return this.prisma.kos.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.kos.delete({
      where: { id },
    });
  }
}
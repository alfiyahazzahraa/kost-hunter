import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../Prisma/prisma.service';
import { CreateReviewsDto } from './dto/create-reviews.dto';
import { UpdateReviewsDto } from './dto/update-reviews.dto';

@Injectable()
export class ReviewsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateReviewsDto) {
    const kos = await this.prisma.kos.findUnique({
      where: { id: dto.kos_id },
    });

    if (!kos) throw new NotFoundException('Kos not found');

    return this.prisma.reviews.create({
      data: dto,
    });
  }

  findAll() {
    return this.prisma.reviews.findMany();
  }

  async findOne(id: number) {
    const review = await this.prisma.reviews.findUnique({ where: { id } });
    if (!review) throw new NotFoundException('Review not found');
    return review;
  }

  async update(id: number, dto: UpdateReviewsDto) {
    await this.findOne(id);

    if (dto.kos_id) {
      const kos = await this.prisma.kos.findUnique({
        where: { id: dto.kos_id },
      });

      if (!kos) throw new NotFoundException('Kos not found');
    }

    return this.prisma.reviews.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.reviews.delete({
      where: { id },
    });
  }
}
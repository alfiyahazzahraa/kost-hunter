import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../Prisma/prisma.service';
import { CreateBooksDto } from './dto/create-books.dto';
import { UpdateBooksDto } from './dto/update-books.dto';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateBooksDto) {
    return this.prisma.books.create({
      data: {
        user_id: dto.user_id,
        kos_id: dto.kos_id,
        date: new Date(),
      },
    });
  }

  findAll() {
    return this.prisma.books.findMany({
      include: {
        user: true,
        kos: true,
      },
    });
  }

  async findOne(id: number) {
    const books = await this.prisma.books.findUnique({
      where: { id },
      include: {
        user: true,
        kos: true,
      },
    });

    if (!books) throw new NotFoundException('Books not found');

    return books;
  }

  update(id: number, dto: UpdateBooksDto) {
    return this.prisma.books.update({
      where: { id },
      data: {
        user_id: dto.user_id,
        kos_id: dto.kos_id,
      },
    });
  }

  remove(id: number) {
    return this.prisma.books.delete({
      where: { id },
    });
  }
}
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UsersModule } from './users/users.module';
import { KosModule } from './kos/kos.module';
import { ReviewsModule } from './reviews/reviews.module';
import { PrismaModule } from './Prisma/prisma.module';
import { BooksModule } from './books/books.module';

@Module({
  imports: [ UsersModule, KosModule, ReviewsModule, PrismaModule, BooksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
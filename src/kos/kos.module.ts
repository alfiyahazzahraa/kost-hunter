import { Module } from '@nestjs/common';
import { KosController } from './kos.controller';
import { KosService } from './kos.service';

@Module({
  controllers: [KosController],
  providers: [KosService],
  exports: [KosService], 
})
export class KosModule {}
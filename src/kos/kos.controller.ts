import { Controller, Get, Post, Body, Put, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { KosService } from './kos.service';
import { CreateKosDto } from './dto/create-kos.dto';
import { UpdateKosDto } from './dto/update-kos.dto';

@Controller('kos')
export class KosController {
  constructor(private readonly kosService: KosService) {}

  @Post()
  create(@Body() createKosDto: CreateKosDto) {
    return this.kosService.create(createKosDto);
  }

  @Get()
  findAll() {
    return this.kosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.kosService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateKosDto: UpdateKosDto,
  ) {
    return this.kosService.update(id, updateKosDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.kosService.remove(id);
  }
}
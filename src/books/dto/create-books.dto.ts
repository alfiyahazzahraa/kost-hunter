import { IsInt } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateBooksDto {
  @Type(() => Number)
  @IsInt()
  user_id: number;

  @Type(() => Number)
  @IsInt()
  kos_id: number;
}
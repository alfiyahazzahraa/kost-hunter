import { IsNumber, IsString, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateReviewsDto {
  @IsNumber()
  @Type(() => Number)
  user_id: number;

  @IsNumber()
  @Type(() => Number)
  kos_id: number;

  @IsNumber()
  @Type(() => Number)
  rating: number;

  @IsString()
  @IsNotEmpty()
  comment: string;
}
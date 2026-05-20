import { IsNotEmpty, IsNumber, IsString, IsIn} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateKosDto {
  @IsNumber()
  @Type(() => Number)
  user_id: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsNumber()
  @Type(() => Number)
  price_per_month: number;

  @IsString()
  @IsIn(['male', 'female', 'other'])
  gender: string;
}
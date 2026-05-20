import { PartialType } from '@nestjs/mapped-types';
import { CreateKosDto } from './create-kos.dto';

export class UpdateKosDto extends PartialType(CreateKosDto) {}

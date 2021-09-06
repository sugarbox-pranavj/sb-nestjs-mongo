import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { IdValidator } from '@decorators/id-validator.decorator';

export class CreateCatDto {
  @IsString()
  @IsNotEmpty()
  @IdValidator()
  public name: string;

  @IsNumber()
  public age: number;

  @IsString()
  @IsNotEmpty()
  public breed: string;
}

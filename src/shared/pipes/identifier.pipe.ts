import {
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import * as mongoose from 'mongoose';

@Injectable()
export class IdentifierPipe implements PipeTransform {
  transform(value: string) {
    if (!mongoose.Types.ObjectId.isValid(value)) {
      throw new HttpException(
        `Invalid identifier: ${value}`,
        HttpStatus.BAD_REQUEST,
      );
    }

    return value;
  }
}

import { HttpException, HttpStatus } from '@nestjs/common';

export class ExceptionService {
  static badRequest(message: string): void {
    throw new HttpException(message, HttpStatus.BAD_REQUEST);
  }
}

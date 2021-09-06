import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './schemas/cat.schema';
import { IdentifierPipe } from '@pipes/identifier.pipe';
import { CAT_PARAMS, CAT_ROUTES } from './cats.constant';

@Controller(CAT_ROUTES.cats)
export class CatsController {
  constructor(private readonly _catsService: CatsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body(new ValidationPipe({ transform: true }))
    createCatDto: CreateCatDto,
  ) {
    await this._catsService.create(createCatDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<Cat[]> {
    return this._catsService.findAll();
  }

  @Get(CAT_ROUTES.catById)
  @HttpCode(HttpStatus.OK)
  async find(
    @Param(CAT_PARAMS.id, new IdentifierPipe())
    id: string,
  ): Promise<Cat[]> {
    return this._catsService.findAll();
  }
}

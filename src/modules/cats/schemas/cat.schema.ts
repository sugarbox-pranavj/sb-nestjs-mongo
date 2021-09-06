import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type CatDocument = Cat & Document;

@Schema({
  collection: 'cat',
  timestamps: true,
})
export class Cat {
  @Prop({
    type: mongoose.Schema.Types.String,
    required: true,
  })
  name: string;

  @Prop({
    type: mongoose.Schema.Types.Number,
    required: true,
  })
  age: number;

  @Prop({
    type: mongoose.Schema.Types.String,
    required: true,
  })
  breed: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);

import {
  buildMessage,
  EQUALS,
  ValidateBy,
  ValidationOptions,
} from 'class-validator';
import * as mongoose from 'mongoose';
import { LABELS } from '@constants/labels.constant';

export function IdValidator(
  validationOptions?: ValidationOptions,
): PropertyDecorator {
  return ValidateBy(
    {
      name: EQUALS,
      validator: {
        validate: (value: string): boolean =>
          mongoose.Types.ObjectId.isValid(value),
        defaultMessage: buildMessage(
          (eachPrefix, args) => `${LABELS.invalidIdentifier} ${args.value}`,
          validationOptions,
        ),
      },
    },
    validationOptions,
  );
}

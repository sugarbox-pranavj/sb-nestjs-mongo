import { registerDecorator } from 'class-validator';
import { LABELS } from '@constants/labels.constant';

export function IsNotBlank() {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'isNotBlank',
      target: object.constructor,
      propertyName: propertyName,
      options: {
        message: `${propertyName} ${LABELS.shouldNotBeEmpty}`,
      },
      validator: {
        validate(value: any) {
          return (
            typeof value === 'string' && (!value || value.trim().length > 0)
          );
        },
      },
    });
  };
}

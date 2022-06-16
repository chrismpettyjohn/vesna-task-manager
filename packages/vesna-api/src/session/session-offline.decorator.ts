import {applyDecorators, UseGuards} from '@nestjs/common';

export function IsOffline() {
  return applyDecorators(UseGuards(IsOffline));
}

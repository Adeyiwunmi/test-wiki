import { Controller, Get } from '@nestjs/common';

@Controller('preys')
export class PreysController {
  /**
   * Says hello
   * @returns Striing
   */
  @Get()
  sayHello(): string {
    return 'prey controller';
  }
}

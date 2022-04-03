import { Controller, Get } from '@nestjs/common';

@Controller('hackers')
export class HackersController {
  /**
   * Says bad things
   * @returns Striing
   */
  @Get()
  sayBadTHings(): string {
    return 'we hack you';
  }
}

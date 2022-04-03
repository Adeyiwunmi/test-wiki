import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * takes in nothing, or sometimes all you haveeeeee
   * @returns Striing
   */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

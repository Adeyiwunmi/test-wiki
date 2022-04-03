import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * takes in nothing
   * @returns Striing
   */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

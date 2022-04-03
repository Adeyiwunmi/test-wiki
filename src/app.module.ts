import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HackersController } from './hackers/hackers.controller';
import { PreysController } from './preys/preys.controller';

@Module({
  imports: [],
  controllers: [AppController, HackersController, PreysController],
  providers: [AppService],
})
export class AppModule {}

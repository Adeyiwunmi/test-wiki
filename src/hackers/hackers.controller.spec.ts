import { Test, TestingModule } from '@nestjs/testing';
import { HackersController } from './hackers.controller';

describe('HackersController', () => {
  let controller: HackersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HackersController],
    }).compile();

    controller = module.get<HackersController>(HackersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { PreysController } from './preys.controller';

describe('PreysController', () => {
  let controller: PreysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PreysController],
    }).compile();

    controller = module.get<PreysController>(PreysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { WritingsController } from './writings.controller';

describe('Writings Controller', () => {
  let controller: WritingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WritingsController],
    }).compile();

    controller = module.get<WritingsController>(WritingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

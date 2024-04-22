import { Test, TestingModule } from '@nestjs/testing';
import { WaterReadingController } from './water-reading.controller';
import { WaterReadingService } from './water-reading.service';

describe('WaterReadingController', () => {
  let waterReadingController: WaterReadingController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [WaterReadingController],
      providers: [WaterReadingService],
    }).compile();

    waterReadingController = app.get<WaterReadingController>(WaterReadingController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(waterReadingController.getAllReadings()).toBe('Hello World!');
    });
  });
});

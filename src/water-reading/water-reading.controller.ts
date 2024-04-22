import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { WaterReadingService } from './water-reading.service';
import { WATER_READING_URL } from '../constants';
import { WaterReadingDTO } from './water-reading.dto';

@Controller(WATER_READING_URL)
export class WaterReadingController {
  constructor(private readonly waterReadingService: WaterReadingService) {}

  @Get()
  getAllReadings(@Query() query?: {$filter: string}): Promise<WaterReadingDTO[]> {
    return this.waterReadingService.getAllReadings(query);
  }

  @Get(':id')
  getReadingById(@Param('id') id: string): Promise<WaterReadingDTO> {
    return this.waterReadingService.getReadingById(id);
  }

  @Post()
  postReading(@Body() waterReadingData: WaterReadingDTO): Promise<WaterReadingDTO> {
    return this.waterReadingService.createReading(waterReadingData);
  }
}

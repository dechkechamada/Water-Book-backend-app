import { Injectable, NotFoundException } from '@nestjs/common';
import { WaterReadingDTO } from './water-reading.dto';
import { InjectModel } from '@nestjs/mongoose';
import { WaterReading, WaterReadingDocument } from './water-reading.schema';
import { Model } from 'mongoose';

@Injectable()
export class WaterReadingService {

  constructor(
    @InjectModel(WaterReading.name)
    private readonly waterReadingModel: Model<WaterReadingDocument>
  ) {
    
  }

  getAllReadings(query: {$filter: string}): Promise<WaterReadingDTO[]> {
    const filter = this.getMongoFilter(query);
    return this.waterReadingModel.find(filter).exec();
  }

  async getReadingById(id: string): Promise<WaterReadingDTO> {
    let result = await this.waterReadingModel.findOne({id}).exec();
    if (!result) {
      throw new NotFoundException();
    }
    return result;
  }

  createReading(waterReadingData: WaterReadingDTO): Promise<WaterReadingDTO> {
    const createdWaterReading = new this.waterReadingModel(waterReadingData);
    return createdWaterReading.save();
  }

  getMongoFilter(query) {
    let dbFilter = {};
    let queryParts = query['$filter']?.split(' ');
    if (queryParts && queryParts.length === 3 && queryParts[0] === 'timestamp') {
      let key = `$${queryParts[1]}`
      dbFilter['timestamp'] = {
        [key] : new Date(queryParts[2])
      };
    }
    return dbFilter;
  }
}

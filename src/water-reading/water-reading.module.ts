import { Module } from '@nestjs/common';
import { WaterReadingController } from './water-reading.controller';
import { WaterReadingService } from './water-reading.service';
import { MongooseModule, getConnectionToken } from '@nestjs/mongoose';
import { WaterReading, WaterReadingSchema } from './water-reading.schema';
import {
    AutoIncrementID,
    AutoIncrementIDOptions,
  } from '@typegoose/auto-increment';

@Module({
    imports: [
        MongooseModule.forFeatureAsync([
        {
          name: WaterReading.name,
          useFactory: async () => {
            const schema = WaterReadingSchema;
  
            schema.plugin(AutoIncrementID, {
              field: 'id',
              startAt: 1,
            } satisfies AutoIncrementIDOptions);
  
            return schema;
          },
          inject: [getConnectionToken()],
        },
      ])
    ],
    controllers: [WaterReadingController],
    providers: [WaterReadingService],
})
export class WaterReadingModule {}

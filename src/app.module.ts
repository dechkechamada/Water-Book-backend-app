import { Module } from '@nestjs/common';
import { WaterReadingModule } from './water-reading/water-reading.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DB_CONNECTION_URL } from './constants';

@Module({
  imports: [
    WaterReadingModule,
    MongooseModule.forRoot(DB_CONNECTION_URL)
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

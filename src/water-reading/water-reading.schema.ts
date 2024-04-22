import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type WaterReadingDocument = WaterReading & Document;

@Schema()
export class WaterReading {

    @Prop({ required: false })
    id: number;

    //Timestamp of when the data is added
	@Prop({ type: Date, default: Date.now })
	timestamp: Date;

    @Prop({ required: true })
    flow: number;

    @Prop({ required: true })
    pressure: number;
}

export const WaterReadingSchema = SchemaFactory.createForClass(WaterReading);


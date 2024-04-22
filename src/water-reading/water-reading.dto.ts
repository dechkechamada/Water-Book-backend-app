import { IsNotEmpty, IsPositive } from "@nestjs/class-validator";


export class WaterReadingDTO {

    @IsNotEmpty()
    @IsPositive()
    pressure: number;

    @IsNotEmpty()
    @IsPositive()
    flow: number;

}
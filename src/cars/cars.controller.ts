import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  /**
   * Es readonly porque no queremos accidentalmente cambiar nada de nuestro service aca.
   * En el construsctor tealizamos la Inyección de dependencias y Nest automaticamente.
   * Por debajo realiza la instancia para que quede para nosotros lista para usar.
   * */
  constructor(private readonly carsService: CarsService) {}

  /**
   * The Get decoractor will tell nest to invoke that method
   * whenever the route cars recieve a get request from the client.
   * http://localhost:3000/cars
   */
  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  /**
   * We use the @Get decorator with one parameter to specify the path.
   * So this methos will be executed always with a request like this:
   * http://localhost:3000/cars/1
   *
   * Also, we use @param decorator to get the value sended in the route.
   * @param carId :id
   * @returns car: string
   */
  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: number) {
    return this.carsService.findById(id);
  }

  @Post()
  createCar(@Body() body: any) {
    return body;
  }

  @Patch(':id')
  updateCar(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return body;
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return {
      method: 'delete',
      id,
    };
  }
}

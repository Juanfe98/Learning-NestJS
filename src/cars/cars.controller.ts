import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './DTO/create-car.dto';
import { UpdateCarDto } from './DTO/update-car.dto';

@Controller('cars')
/**
 * This @UsePipes decorator will tell nest that this whole controller will be
 * using the class validator to validate the routes.
 */
@UsePipes(ValidationPipe)
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
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.findById(id);
  }

  /**
   * Thanks to the @usePipes(classValidator) this POST route will validate the
   * params passed with the createCarDto.
   */
  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    return this.carsService.createOne(createCarDto);
  }

  @Patch(':id')
  updateCar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarDto: UpdateCarDto,
  ) {
    return this.carsService.update(id, updateCarDto);
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.delete(id);
  }
}

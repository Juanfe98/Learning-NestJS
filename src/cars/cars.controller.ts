import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  /**
   * The Get decoractor will tell nest to invoke that method
   * whenever the route cars recieve a get request from the client.
   * http://localhost:3000/cars
   */
  @Get()
  getAllCars() {
    return this.cars;
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
  getCarById(@Param('id') id: string) {
    return this.cars[id];
  }
}

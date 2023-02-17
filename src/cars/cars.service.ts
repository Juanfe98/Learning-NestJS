import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './DTO/create-car.dto';
import { UpdateCarDto } from './DTO/update-car.dto';

@Injectable()
export class CarsService {
  // Private queire decir que solo podrá ser accedido en el servicio.
  private cars: Car[] = [];

  findAll() {
    return this.cars;
  }

  /**
   *
   * @param id
   * Exception filters. Nest ya viene con unas excepciones que podemos usar
   * para enviar el mensaje correcto de error al cliente.
   * En este caso estamos usando `NotFoundException` con un custome message,
   * cuando el carId no see encuentra.
   */
  findById(id: string): Car {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);
    return car;
  }

  createOne(createCarDto: CreateCarDto) {
    const newCar = { ...createCarDto, id: uuid() };
    this.cars = [...this.cars, newCar];
    return newCar;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    let updateCar = this.findById(id);

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        updateCar = { ...car, ...updateCarDto, id };
        return updateCar;
      }
      return car;
    });

    return updateCar;
  }

  delete(id: string) {
    const deleteCar = this.findById(id);
    this.cars = this.cars.filter((car) => {
      return car.id !== id;
    });
    return deleteCar;
  }

  populateTableWithSeed(cars: Car[]) {
    console.log(
      '🚀 ~ file: cars.service.ts:75 ~ CarsService ~ populateTableWithSeed ~ cars',
      cars,
    );
    this.cars = cars;
  }
}

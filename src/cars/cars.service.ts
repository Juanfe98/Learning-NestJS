import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CarsService {
  // Private queire decir que solo podrá ser accedido en el servicio.
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Mazda',
      model: 'Mazda3',
    },
    {
      id: uuid(),
      brand: 'Nissan',
      model: 'Versa',
    },
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Prado',
    },
  ];

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
  findById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);
  }
}

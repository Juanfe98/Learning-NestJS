import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  // Private queire decir que solo podrá ser accedido en el servicio.
  private cars = [
    {
      id: 1,
      brand: 'Mazda',
      mode: 'Mazda3',
    },
    {
      id: 2,
      brand: 'Nissan',
      mode: 'Versa',
    },
    {
      id: 3,
      brand: 'Toyota',
      mode: 'Prado',
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
  findById(id: number) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
  // Private queire decir que solo podrá ser accedido en el servicio.
  private cars = [
    {
      id: '1',
      brand: 'Mazda',
      mode: 'Mazda3',
    },
    {
      id: '2',
      brand: 'Nissan',
      mode: 'Versa',
    },
    {
      id: '3',
      brand: 'Toyota',
      mode: 'Prado',
    },
  ];
}

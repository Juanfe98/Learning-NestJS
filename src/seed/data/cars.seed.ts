import { v4 as uuid } from 'uuid';
import { Car } from 'src/cars/interfaces/car.interface';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Corolla',
  },
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Prado',
  },
  {
    id: uuid(),
    brand: 'Nissan',
    model: 'March',
  },
  {
    id: uuid(),
    brand: 'Mercedes',
    model: 'GLA300',
  },
  {
    id: uuid(),
    brand: 'Mazda',
    model: 'Mazda3',
  },
  {
    id: uuid(),
    brand: 'Mazda',
    model: 'Mazda2',
  },
  {
    id: uuid(),
    brand: 'Jeep',
    model: 'Cherokee',
  },
];

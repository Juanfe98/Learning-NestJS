import { Injectable } from '@nestjs/common';
import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';
import { BRANDS_SEED } from './data/brands.seed';
import { CARS_SEED } from './data/cars.seed';

/**
 * Will handle the default data we need to seed into the database.
 */

@Injectable()
export class SeedService {
  constructor(
    private carsService: CarsService,
    private brandsService: BrandsService,
  ) {}
  populateDatabase() {
    // Populate the Cars Table
    this.carsService.populateTableWithSeed(CARS_SEED);
    // Populate the Brands Table
    this.brandsService.populateTableWithSeed(BRANDS_SEED);
  }
}

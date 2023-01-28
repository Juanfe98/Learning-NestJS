import { Injectable, NotFoundException, ParseUUIDPipe } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    {
      id: uuid(),
      name: 'Toyota',
      createdAt: new Date().getTime(),
    },
  ];

  create(createBrandDto: CreateBrandDto) {
    const newBrand: Brand = {
      id: uuid(),
      name: createBrandDto.name.toLowerCase(),
      createdAt: new Date().getTime(),
    };
    this.brands = [...this.brands, newBrand];
    return newBrand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((brand) => brand.id === id);
    if (!brand) throw new NotFoundException();
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    const brand = this.findOne(id);

    this.brands = this.brands.map((brandItem) => {
      if (brandItem.id === brand.id) {
        brandItem = { ...brand, ...updateBrandDto, id };
      }
      return brandItem;
    });
    return this.brands;
  }

  remove(id: string) {
    const brand = this.findOne(id);
    this.brands.splice(this.brands.indexOf(brand), 1);
    return this.brands;
  }
}

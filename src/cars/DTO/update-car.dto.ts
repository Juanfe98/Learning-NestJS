import { IsOptional, IsString, IsUUID } from 'class-validator';

/**
 * This DTO is very similar to the createCarDto, so there are something we can do
 * to avoid this replciation. We will see that later.
 */

export class UpdateCarDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string;

  /**
   * We are using the @Isoptional cause depending hoy you will want to create your backend
   * you can recieve only the params that were updated for that car.
   * If you always recieve all the params it's not necessary to add the IsOptional
   */
  @IsString()
  @IsOptional()
  readonly model?: string;

  @IsString()
  @IsOptional()
  readonly brand?: string;
}

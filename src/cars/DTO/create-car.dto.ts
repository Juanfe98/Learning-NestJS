import { IsString } from 'class-validator';

/**
 * Los DTO cuando se crea una instancioa, normalmente  no deben cambiarle
 * las propiedades, por esto las asignamos como readonly.
 *
 * Esto debido a que generaria problemas si en algun otro lado de nuestro
 * aplicativo cambiaramos la estructura. (nuesto DTO)
 */
export class CreateCarDto {
  @IsString()
  readonly brand: string;

  @IsString()
  readonly model: string;
}

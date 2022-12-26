# NestJS

## Servicios

Alojan la lógica de negocio de tal manera que sea reutilizable mediante inyección de dependencias.

E.g PeliculasService para todo lo relacionado a obtener, grabar, actualizar o eliminar información de películas

En Nest sucede algo interesante con los `servicios` y `providers` y es que todos los servicios son 
`providers` pero todos los `providers` NO son `servicios`

Esto es un servicio recien creado.

Aca podemos ver el `@Injectable` que es un decorador que marca la clase como un `provider`, esto quiere
decir que puede ser inyectada via constructor parameter injection using Nest's built-in Dependency Injection (DI) system. 

```typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {}
```

## Providers

Providers are a fundamental concept in Nest. Many of the basic Nest classes may be treated as a provider – services, repositories, factories, helpers, and so on. The main idea of a provider is that it can be injected as a dependency; this means objects can create various relationships with each other, and the function of "wiring up" instances of objects can largely be delegated to the Nest runtime system.

Basicamente son clases que se pueden inyectar. Pero no todos van a ser servicios, es decir no todos los providers van a tener en ellos informacion sobre la logica de negocio.


## Aplicando la Inyección de nuestro servicio

Se realiza la inyección de dependencias desde el constructor.

(Ver) Cars folder (controller y service) para mas detalle.

```typescript
constructor(private readonly carsService: CarsService) {}
```
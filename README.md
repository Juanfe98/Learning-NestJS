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

## Pipes

[Pipes](https://docs.nestjs.com/pipes)
A pipe is a class annotated with the @Injectable() decorator, which implements the PipeTransform interface.

Pipes have two typical use cases:

transformation: transform input data to the desired form (e.g., from string to integer)
validation: evaluate input data and if valid, simply pass it through unchanged; otherwise, throw an exception when the data is incorrect
In both cases, pipes operate on the arguments being processed by a controller route handler. Nest interposes a pipe just before a method is invoked, and the pipe receives the arguments destined for the method and operates on them. Any transformation or validation operation takes place at that time, after which the route handler is invoked with any (potentially) transformed arguments.

Nest comes with a number of built-in pipes that you can use out-of-the-box. You can also build your own custom pipes. In this chapter, we'll introduce the built-in pipes and show how to bind them to route handlers. We'll then examine several custom-built pipes to show how you can build one from scratch.

### Utilizando Pipes para realizar validaciones

En nuestro method get en el controlador de cars, vamos a utilizar el pipe para transformar ese valor que recibimos
de la peticion de una vez a un entero, esto lo hacemos de la siguiente manera:

`ParseIntPipe` va a transformar el valor en un entero justo cuando llega la petición. 

```typescript
  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: number) {
    return this.carsService.findById(id);
  }
```

Lo mas genial de todo esto es que no solo es un transformador, sino que tambien nos sirve de validador, 
cuando llega de la petición un valor que no puede ser convertido a numero devolvera lo siguiente:

```JSON
{
  "statusCode": 400,
  "message": "Validation failed (numeric string is expected)",
  "error": "Bad Request"
}
```


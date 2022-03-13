import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interface/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform( heroes:Heroe[]):Heroe[]{
    // ordenamiento
    heroes = heroes.sort( (a,b) => (a.nombre > b.nombre) ? 1:-1);
    return heroes; 
  }

}

import { Component , OnInit } from '@angular/core';
import { Color, Heroe } from '../../interface/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent  {

  enMayusculas:boolean = true;


  heroes:Heroe[] = [
    {
      nombre:"Superman",
      vuela:true,
      color:Color.azul
    },
    {
      nombre:"Batman",
      vuela:false,
      color:Color.negro
    },
    {
      nombre:"Robin",
      vuela:false,
      color:Color.verde
    },
    {
      nombre:"Daredevil",
      vuela:false,
      color:Color.rojo
    },
    {
      nombre:"Linterna Verde",
      vuela:true,
      color:Color.verde
    },
    
    
  ]

  cambiar(){
    this.enMayusculas = !this.enMayusculas;
  }

  vuela:boolean = true;

  ordenarPor:string =''

  cambiarOrder( valor:string ){
    this.ordenarPor= valor;
    console.log(valor)
  }

}

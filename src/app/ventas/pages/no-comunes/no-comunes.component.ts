import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect 
  nombre:string = "Antonio";
  genero:string = "masculino";

  invitacionMapa ={
    'masculino':'invitarlo',
    'femenino':'invitarla'
  }

  // i18nPlural
  clientes:string[] = ['Maria','Juan','Fernando','Felipe'];

  clientesMapa = {
    '=0':'no tenemos ningun cliente esperando.',
    '=1':'tenemos un cliente esperando.',
    '=2':'tenemos dos clientes esperando.',
    'other':`tenemos # clientes esperando`    
  }
 
  cambiarCliente(){
    this.nombre = "Melisa";
    this.genero = "femenino"
  }
  
  borrarCliente(){
    this.clientes.pop()
  }

  // KeyValuePipe 
  persona = {
    nombre:"Antonio",
    edad:24,
    direccion:"Guanajuato, Mexico"
  }

  // Json pipe 
  heroes = [
    {
      nombre:"superman",
      vuela:true
    },
    {
      nombre:"robin",
      vuela:false
    },
    {
      nombre:"iron man",
      vuela:true
    },
    {
      nombre:"spider man",
      vuela:false
    },
  ]
  
  // otra forma de contar elementos del array en opcion other
  // clientesMapa = {
  //   '=0':'no tenemos ningun cliente esperando.',
  //   '=1':'tenemos un cliente esperando.',
  //   '=2':'tenemos dos clientes esperando.',
  //   'other':`tenemos ${this.clientes.length} clientes esperando`    
  // }

}

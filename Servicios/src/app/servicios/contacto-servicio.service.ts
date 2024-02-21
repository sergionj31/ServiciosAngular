import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactoServicioService {
  public resultadoPeticion: string = '';

  constructor() { }

  obtenerJSON(){
    return this.resultadoPeticion;
  }
}

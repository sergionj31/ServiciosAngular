import { Component, OnInit } from '@angular/core';
import { AlertService } from '../servicios/alert.service';
import { Proyecto } from '../clases/proyecto..model';
import { ProyectoServicioService } from '../servicios/proyecto-servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent implements OnInit{
  public inputNombre: string = '';
  public inputPresupuesto: string = '';
  public proyecto: Proyecto = new Proyecto();
  public listaProyecto: Proyecto[] = new Array<Proyecto>();
  public arrayProyecto: Proyecto[] = [];
  
  constructor(private ruta: Router, private alerta:AlertService, private proyectoService: ProyectoServicioService) { // inyectar el servicio en el constructor de la clase
    console.log("Entro en constructor de Proyectos");
    this.arrayProyecto = this.proyectoService.obtenerListaProyectos();
  }

  enviarMensaje (mensaje:string){
    this.alerta.mostrarMensaje(mensaje);
  }
  ngOnInit() {
    //this.enviarMensaje("ngOnInit de HomeComponent");
  }

  agregar() {
    this.proyecto.nombre = this.inputNombre;
    this.proyecto.presupuesto = this.inputPresupuesto;
    this.proyectoService.crearProyecto(this.proyecto);
    console.log(this.proyecto.nombre);
    console.log(this.proyecto.presupuesto);
    // Navegar a otro componente por código.
    this.ruta.navigate(['']);
  }
}

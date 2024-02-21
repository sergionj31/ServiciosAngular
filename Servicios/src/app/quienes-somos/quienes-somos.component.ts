import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PlaceHolder } from '../interfaces/place-holder';
import { ContactoServicioService } from '../servicios/contacto-servicio.service';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrl: './quienes-somos.component.css'
})
export class QuienesSomosComponent implements OnInit{
  public resultadoPeticion: any;
  public inputIdGet: string = '';  
  public url: string = "https://jsonplaceholder.typicode.com/posts/";

  constructor (private http:HttpClient, private contactoServicio: ContactoServicioService ) {
    this.resultadoPeticion = this.contactoServicio.obtenerJSON();
  }

  ngOnInit (){
    this.get();
  }

  get (){
    this.http.get(this.url)
    .subscribe ( data => {this.resultadoPeticion = data;});
  }

  get2 (){
    this.http.get<PlaceHolder>(this.url+"/"+this.inputIdGet)
    .subscribe ( 
      data => {this.resultadoPeticion = data;
      this.resultadoPeticion.userId;
    });
  }

  get3 (){
    this.http.get<PlaceHolder>(this.url+"/"+this.inputIdGet)
    .subscribe(
      {
        next: (respuesta: PlaceHolder) => {
          this.resultadoPeticion = respuesta;
          console.log(this.resultadoPeticion.id);
          console.log(this.resultadoPeticion.userId);
          console.log(this.resultadoPeticion.body);
          console.log(this.resultadoPeticion.title);
        },
        error: (err) => {console.log("error");}
      }
    );
  }

  post (){
    this.http.post(this.url, 
      {
        userId: 2,
        id: 200,
        title: "nuevo título",
        body: "nuevo cuerpo"
      }).subscribe (data => {this.resultadoPeticion = data;})
  }

  put (){
    this.http.put (this.url+"/10",
    {
      userId: 2,
      title: "nuevo título",
      body: "nuevo cuerpo"
    }).subscribe (data => {this.resultadoPeticion = data;})
  }

  patch (){
    this.http.patch (this.url+"/10",
    {
      userId: 2,
      body: "nuevo cuerpo"
    }).subscribe (data => {this.resultadoPeticion = data;})
  }

  delete (){
    this.http.delete(this.url+"/10")
    .subscribe ( data => {this.resultadoPeticion = data;});
  }
}


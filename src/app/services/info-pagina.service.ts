import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.service';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info:InfoPagina={};
  cargada= false;
  equipo: any[]=[];
  constructor(private http:HttpClient) {
    //console.log("Hola");
this.cargarInfo();
this.cargarEquipo();
   }

   private cargarInfo(){
    this.http.get('assets/data/data-pagina.json')
    .subscribe((resp:InfoPagina)=>{
      this.cargada=true;
      this.info= resp;
    
    
    });
   }
   private cargarEquipo(){
    this.http.get('https://angular-561df.firebaseio.com/equipo.json')
    .subscribe( (resp: any[]) =>{
  
      this.equipo = resp;
      console.log(resp);
    
    
    });
   }
}
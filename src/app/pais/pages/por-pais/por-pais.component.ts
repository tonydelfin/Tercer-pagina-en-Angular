import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li{
        cursor:pointer;
      }
    `
  
  ]

})
export class PorPaisComponent {

  termino: string = ""
  hayError:  boolean = false;
  paises : Pais[] = []; 
  paisesSugeridos: Pais[]  = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService){}


  
  buscar(termino: string){

    this.hayError = false;
   this.termino = termino;  
    // console.log(this.termino);

    this.paisService.buscarPais(this.termino)
    .subscribe((paises) => {
      console.log(paises);
      this.paises = paises;
      
    },(error)=>{
      this.hayError = true;
      this.paises =[];
    });
  }

  sugerencias(termino: string){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.paisService.buscarPais( termino)
    .subscribe(paises => this.paisesSugeridos  = paises.splice(0,5),
    (err) => this.paisesSugeridos = []
    );
  }
  buscarSugerido(termino: string){
    this.buscar(termino);

  }

}

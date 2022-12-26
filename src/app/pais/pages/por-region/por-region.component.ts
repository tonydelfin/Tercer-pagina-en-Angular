import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button{
      margin-right: 5px;
      margin-bottom: 5px;
    }
    `
  ]

})
export class PorRegionComponent {

  // regiones: string[] =["Eu", "EFTA", "CARICOM", "PA", "AU", "USAN", "EEU", "AL", "ASEAN", "CAIS", "CEFTA", "NAFTA", "SAARC"];
  regiones:  string[] = ["Africa", "Americas", "Asia", "Europe", "Oceania"]
  regionActiva:  string = "";
  paises: Pais[] =[];


  hayError:  boolean = false;


  constructor(private paisService: PaisService){}


  
  

  // Cuarto uso de heredar clases
  // getClaseCSS(region: string){
  //   return ((region ===  this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary')
  // }

  activarRegion(region: string){

    if(region === this.regionActiva){return;}

    this.regionActiva = region;
    this.paises = [];
    
  
    // console.log(this.termino);

    this.paisService.buscarRegion(this.regionActiva.toLocaleLowerCase())
    .subscribe((paises) => {
      console.log(paises);
      this.paises =  paises;

      
    },(error)=>{
      this.hayError = true;
      this.paises =[];
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';


@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
 
})
export class VerPaisComponent implements OnInit {

  pais!: Pais;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
    ){}

  ngOnInit(): void {

    // Observable normal


    // this.activatedRoute.params
    // .subscribe(({id})=>{
    //   console.log(id);
    
    //   this.paisService.obtenerPaisPorCodigo(id)
    //   .subscribe( pais =>{
    //     console.log(pais);
        
    //   });
      
    // });

    //observable con Rjxs SwitchMap

    this.activatedRoute.params 
    .pipe(                  
      switchMap( (params)=> this.paisService.obtenerPaisPorCodigo(params["id"])), 
      tap(console.log) 
      )
    .subscribe( res=> {this.pais = res[0] });
    console.log("pais: ",this.pais)



  }


}

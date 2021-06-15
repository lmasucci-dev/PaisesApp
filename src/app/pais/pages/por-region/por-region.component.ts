import { Component } from '@angular/core';
import { Country, RegionalBloc } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [ `
  button {
    margin-right: 5px;
  }
  `
  ]
})
export class PorRegionComponent {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises : Country[] = [];

  constructor(private paisService: PaisService) { }

  getClaseCss( region: string) {
    return (region === this.regionActiva ? 'btn btn-primary': 'btn btn-outline-primary')
  }

  activarRegion(region: string){
    if(region === this.regionActiva) {return ;}
    this.regionActiva = region;
    this.paises = [];
    console.log(this.regionActiva);
    this.paisService.buscarRegion(this.regionActiva)
    .subscribe( (paises) => {
      this.paises = paises;
    });
  }
  }



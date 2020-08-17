import { Component } from '@angular/core';
import { InformacionService } from './../services/informacion.service';
import { Datos } from './../interfaces/datos';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  peso: number = 0;
  estado_buzon: false;
  datosR: Datos[] = [];
  datosR2 = [
    {
      estado_buzon: false,
      nivel_liquido: "Bajo",
      percent_liquido: "15",
      peso: 0
    }
  ];
  constructor(private informacionService: InformacionService) {}

  ionViewWillEnter(){
    this.informacionService.getDatos()
    .subscribe(misdatos => {       
      this.datosR = misdatos;
      console.log(this.datosR);
    });
  }

}

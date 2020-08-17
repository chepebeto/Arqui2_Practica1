import { Component } from '@angular/core';
import { InformacionService } from './../services/informacion.service';
import { Datos } from './../interfaces/datos';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  datosR: Datos[] = [];
  
  constructor(private informacionService: InformacionService) {}

  ionViewWillEnter(){
    this.informacionService.getDatos()
    .subscribe(misdatos => {       
      this.datosR = misdatos;
      console.log(this.datosR);
    });
  }

}

import { InformacionService } from './../services/informacion.service';
import { Component } from '@angular/core';
import { Datos } from './../interfaces/datos';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page{
  semaforo: string= "Medio";
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

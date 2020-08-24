import { Component } from '@angular/core';
import { InformacionService } from './../services/informacion.service';
import { Datos } from './../interfaces/datos';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  datosR: Datos[] = [];
  
  constructor(private informacionService: InformacionService, public alertController: AlertController) {}

  ionViewWillEnter(){
    this.informacionService.getDatos()
    .subscribe(misdatos => {       
      this.datosR = misdatos;      

      let arr = Object.entries(this.datosR);

      if ((arr[0][0]=="peso") && (arr[0][1].toString()!="0.00")){
        this.AlertaPaqueteBuzon();
      }
    });
  }

  async AlertaPaqueteBuzon() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '¡Atención!',
      subHeader: 'ACE2-APP',
      message: 'Actualmente tiene un paquete en el buzón.!',
      buttons: ['Entendido']
    });
    await alert.present();
  }

}

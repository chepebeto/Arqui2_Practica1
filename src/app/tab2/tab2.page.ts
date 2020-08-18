import { InformacionService } from './../services/informacion.service';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Datos } from './../interfaces/datos';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page{  
  datosR: Datos[] = [];
  
  constructor(private informacionService: InformacionService, public alertController: AlertController) {}

  ionViewWillEnter(){
    this.informacionService.getDatos()
    .subscribe(misdatos => {       
      this.datosR = misdatos;     

      let arr = Object.entries(this.datosR);
      console.log(arr);

      if ((arr[1][0]=="nivel_liquido") && (arr[1][1].toString()=="Bajo")){
        this.AlertaNivelBajo();
      }

            
    });
  }

  
  async AlertaNivelBajo() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '¡Atención!',
      subHeader: 'ACE2-APP',
      message: 'Nivel bajo de desinfectante!',
      buttons: ['Entendido']
    });
    await alert.present();
  }
}

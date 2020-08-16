import { InformacionService } from './../services/informacion.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private infoService: InformacionService) {}

  getDatos(){
    this.infoService.getDatos()
    .subscribe(misdatos => {
      console.log(misdatos);
    });
  }

}

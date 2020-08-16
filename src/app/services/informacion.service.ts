import { Injectable } from '@angular/core';
import { Datos } from './../interfaces/datos';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  constructor(private http: HttpClient) { }
  
  getDatos(){
    const path = 'http://apip1.herokuapp.com/getDatos';
    return this.http.get<Datos[]>(path);
  }

}


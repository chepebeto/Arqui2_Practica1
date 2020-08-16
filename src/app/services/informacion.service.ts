import { Injectable } from '@angular/core';
import { Datos } from './../interfaces/datos';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  constructor(private http: HttpClient) { }
  
  getDatos(){
    const path = 'https://jsonplaceholder.typicode.com/todos/1';
    return this.http.get<Datos>(path);
  }

}


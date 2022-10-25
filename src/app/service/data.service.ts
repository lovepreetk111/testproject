import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BannerCarosuelComponent } from '../banner-carosuel/banner-carosuel.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  hostURL = 'http://localhost:3000/data'
/* 
  getAll():Observable<[]>{
    return this.http.get<[]>(this.hostURL)
  } */
}

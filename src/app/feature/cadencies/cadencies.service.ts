import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CadenciesService {

  constructor(private http: HttpClient) { }

  getCadenciesList(){
    return this.http.get<any>('assets/Data/cadencies.json');
  }
}

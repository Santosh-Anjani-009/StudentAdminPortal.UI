import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gender } from '../models/api-models/gender.model';

@Injectable({
  providedIn: 'root'
})
export class GenderService {

  private baseApiUrl = "https://localhost:7240";
  constructor(private httpClnt: HttpClient) { }

  getGenders(): Observable<Gender[]>{
    return this.httpClnt.get<Gender[]>(this.baseApiUrl+"/Genders")
  }
}

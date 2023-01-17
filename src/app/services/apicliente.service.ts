import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../models/response';

const HTTPoption =
{
  headers : new HttpHeaders({
    'Contend-Typer': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ApiclienteService {

url: string = 'https://localhost:44302/api/cliente';

  constructor(

    private _htpp: HttpClient
  ) { }

  getclientes(): Observable<Response>{

    return this._htpp.get<Response>(this.url);
  }

  //add():Observable<Response>{

    //return this._htpp.post<Response>(this.url,cliente, HTTPoption)
  //}
}

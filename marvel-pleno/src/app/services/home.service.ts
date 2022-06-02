import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { take } from 'rxjs/operators'
import { environment } from 'src/environments/environment';
import * as md5 from 'md5'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  params = new HttpParams()
    .set('apikey', environment.public_key)
    .set('ts', Number( new Date()))
    .set('hash', md5(Number( new Date()) + environment.private_key + environment.public_key))

  constructor(private readonly http: HttpClient) { }

  public getAllComics()  {
    return this.http.get<any>(`${environment.baseUrl}:443/v1/public/characters?` + this.params).pipe(take(1));
  }
}

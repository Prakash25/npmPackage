import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TvmazeService {

  constructor(private http : HttpClient) { }
  getShow(id: number): Observable<any>{
   // let headers = new Headers();
  //  headers.append('Content-Type','application/json');
   let  headers={'x-encrypted-key':'5fd74bdaa1bcb94737894001'};
    //let options = new RequestOptions({headers:headers});
    return this.http.post('https://live.app.nipige.com/home/list/related-items',{"catalogId":"5ffd5884944a185cffe3034f"}, {headers})
  }
}

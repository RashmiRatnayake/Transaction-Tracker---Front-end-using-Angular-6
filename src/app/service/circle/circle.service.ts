import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CircleService {
  circle:any;
  token:any;
  constructor(
    private http:HttpClient
  
  ) { }



  getcircle(): Observable<any> {
    this.fetchToken();
     const httpOptions={
       headers : new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + this.token
      })
    };
  return this.http.get("http://localhost:5550/circle/my-circle",httpOptions);

  }

  removeSubscription(removesubscription):Observable<any>{
    this.fetchToken();
    let headers=new HttpHeaders();
    headers.append('Content-Type','application/json');
    headers.append('Authorization',"Bearer " + this.token);

    return this.http.post<any>("http://localhost:5550/circle/remove",removesubscription,{headers:headers});

}


  fetchToken(){
    const token = localStorage.getItem("token");
    this.token = token;
  }


}

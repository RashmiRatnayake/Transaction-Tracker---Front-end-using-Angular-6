import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
//import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//import { JwtHelperService } from '@auth0/angular-jwt';




@Injectable({
  providedIn: 'root'
})
export class NewsService {
  news:any;
  token:any;
  constructor(
    private http:HttpClient
  //  public jwtHelper: JwtHelperService
  ) { }



  getnews(): Observable<any> {
    this.fetchToken();
     const httpOptions={
       headers : new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + this.token
    })
  };
    return this.http.get("http://localhost:5550/news/news",httpOptions);

}


fetchToken(){
const token = localStorage.getItem("token");
this.token = token;
//console.log(token);
}



}

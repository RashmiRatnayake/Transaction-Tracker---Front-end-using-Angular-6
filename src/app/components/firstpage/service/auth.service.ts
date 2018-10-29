import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:any;
  constructor(
    private http:Http
  ) { }
    registerUser(user){

      //console.log(user);
        let headers=new HttpHeaders();
        headers.append('Content-Type','application/json');

        return this.http.post<any>("http://localhost:5550/users/register",user,{headers:headers});//.pipe(map(res=>res.json()));

  }

  loginUser(user){
    let headers=new Headers();
    headers.append('Content-Type','application/json');

    return this.http.post<any>("http://localhost:5550/users/login",user,{headers:headers});//.pipe(map(res=>res.json()));

  }
}

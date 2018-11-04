import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
//import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//import { JwtHelperService } from '@auth0/angular-jwt';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:any;
  token:any;
  constructor(
    private http:HttpClient
  //  public jwtHelper: JwtHelperService
  ) { }
  registerUser(user):Observable<any>{

    //console.log(user);
      let headers=new HttpHeaders();
      headers.append('Content-Type','application/json');

      return this.http.post<any>("http://localhost:5550/users/register",user,{headers:headers});//.pipe(map(res=>res.json()));

}

loginUser(user): Observable<any>{
  let headers=new HttpHeaders();
  headers.append('Content-Type','application/json');

  return this.http.post<any>("http://localhost:5550/users/login",user,{headers:headers});//.pipe(map(res=>res.json()));

}

myInfo(): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYzLCJlbWFpbCI6ImNjIiwidXNlclR5cGUiOiJEZWFsZXIiLCJpYXQiOjE1NDA4MDMzMzEsImV4cCI6MTU0MDgwODMzMX0.VHPiDgsi81AxT1Bkg4cRPp1M0DRFr36-RpCL_16yQj0'
      })
    };
    return this.http.get("http://localhost:5550/users/profile",httpOptions);


}


  getProfile(): Observable<any> {

    console.log("getprof");
    this.fetchToken();
    console.log(this.token);

     const httpOptions={
       headers : new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + this.token
    })
  };
  console.log(httpOptions);

  //  let headers = new Headers();
    //this.token=token;
  //  headers.set('Authorization',"Bearer " + this.token);
//  console.log(this.token);

    //headers.append('Content-Type','application/json');
    //console.log(headers);
    return this.http.get("http://localhost:5550/users/profile",httpOptions);

}


fetchToken(){
const token = localStorage.getItem("token");
this.token = token;
//console.log(token);
}



logout(){
    this.token  = null;
  //  this.user = null;
    localStorage.clear();

  }

  loggedIn() {
    // console.log(this.jwtHelper.isTokenExpired());
  }


}

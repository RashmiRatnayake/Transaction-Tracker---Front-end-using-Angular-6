import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
//import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//import { JwtHelperService } from '@auth0/angular-jwt';




@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  transaction:any;
  token:any;
  newtransaction:any;
  constructor(
    private http:HttpClient
  //  public jwtHelper: JwtHelperService
  ) { }

  
  
  
  addTransaction(newtransaction):Observable<any>{

    //console.log(user);
      let headers=new HttpHeaders();
      headers.append('Content-Type','application/json');

      return this.http.post<any>("http://localhost:5550/transactions/addnew",newtransaction,{headers:headers});

}





  gettransactions(): Observable<any> {
    this.fetchToken();
     const httpOptions={
       headers : new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + this.token
    })
  };
    return this.http.get("http://localhost:5550/transactions/my-transactions",httpOptions);

}


fetchToken(){
const token = localStorage.getItem("token");
this.token = token;
//console.log(token);
}



}

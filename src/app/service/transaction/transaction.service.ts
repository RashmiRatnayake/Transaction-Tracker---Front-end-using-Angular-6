import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  transaction:any;
  token:any;
  newtransaction:any;
  deletetransaction:any;
  constructor(
    private http:HttpClient
  ) { }

  
  
  
  addTransaction(newtransaction):Observable<any>{
      this.fetchToken();
      let headers=new HttpHeaders();
      headers.append('Content-Type','application/json');
      headers.append('Authorization',"Bearer " + this.token);

      return this.http.post<any>("http://localhost:5550/transactions/addnew",newtransaction,{headers:headers});

  }

  
  deleteTransaction(deletetransaction):Observable<any>{
    this.fetchToken();
    let headers=new HttpHeaders();
    headers.append('Content-Type','application/json');
    headers.append('Authorization',"Bearer " + this.token);

    return this.http.post<any>("http://localhost:5550/transactions/delete",deletetransaction,{headers:headers});

}




updateTransaction(transaction):Observable<any>{
  this.fetchToken();
  let headers=new HttpHeaders();
  headers.append('Content-Type','application/json');
  headers.append('Authorization',"Bearer " + this.token);

  return this.http.post<any>("http://localhost:5550/transactions/update",transaction,{headers:headers});

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

  viewHistroy(transaction): Observable<any> {
    this.fetchToken();
    
    const trnId=transaction.trnId
    const httpOptions={
       headers : new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + this.token
      }),
     params : new HttpParams().set('trnId',trnId)
    };
    


   
    
    
    //console.log(httpOptions);
    
    
    return this.http.get("http://localhost:5550/transactions/viewHistory",httpOptions);

  }

  getpendingtransactions(): Observable<any> {
    this.fetchToken();
    
    
    const httpOptions={
       headers : new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + this.token
      })
    };
    
    return this.http.get("http://localhost:5550/transactions/mypendingtransactions",httpOptions);

  }

  fetchToken(){
    const token = localStorage.getItem("token");
    this.token = token;

  }

}

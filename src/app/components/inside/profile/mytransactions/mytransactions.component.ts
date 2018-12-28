import { Component, OnInit , Input } from '@angular/core';
import {TransactionService} from '../../../../service/transaction/transaction.service';
import {UserService} from '../../../../service/user/user.service';
import {CircleService} from '../../../../service/circle/circle.service';
import { Router } from "@angular/router";
import { Observable }  from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-mytransactions',
  templateUrl: './mytransactions.component.html',
  styleUrls: ['./mytransactions.component.css']
})
export class MytransactionsComponent implements OnInit {
  user:any;
  transaction:any;
  mytransaction:any;
  pendingtransaction:any;
  mypendingtransaction:any;
  myprofile:any;
  isSupplier:boolean;
  show:boolean;
  mycircle:any;

  amountSettled:number;
  amountPending:number;
  totalAmount:number;
  trnDescription:String;
  remarks:String;
  dueDate:Date;
  trnStatus:String;
  otherParty:String;
  supplier:String;

  trnId:String;

  myhistory:any;




 // @Input() data:any; 
  constructor(
    private router:Router,
    private transactionService:TransactionService,
    private userService:UserService,
    private circleService:CircleService

  ) { }


  
  ngOnInit() {
    
    this.transactionService
        .gettransactions()
        .subscribe(res=>{
          //console.log(res) 
          this.mytransaction = res.transaction
        })

    this.transactionService
        .getpendingtransactions()
        .subscribe(res=>{
          console.log(res) 
          this.mypendingtransaction = res.pendingtransaction;
          //console.log(res.pendingtransaction);
        })

    this.userService
        .getfullProfile()
        .subscribe(res=>{
          //console.log(res.user);
          this.myprofile=res.user
          if (res.user.userType=="Supplier"){
            this.isSupplier=true
            
          }
          else {this.isSupplier=false;}
          console.log("isSupplier: ",this.isSupplier);
        })

    this.circleService
        .getcircle()
        .subscribe(res=>{
          this.mycircle=res.circle
        })   

     
      }
    
      newTransactionData(){
        const newtransaction={
          supplier:this.myprofile.userId,
          amountSettled:this.amountSettled,
          amountPending:this.amountPending,
          totalAmount:this.totalAmount,
          trnDescription:this.trnDescription,
          remarks:this.remarks,
          dueDate:this.dueDate,
          trnStatus:this.trnStatus,
          otherParty:this.otherParty

        };
        console.log(newtransaction);
      this.transactionService.addTransaction(newtransaction).subscribe(res=>{
     console.log("inside method");
        if (res.state){
        console.log("done");
       //this.router.navigate(['inside/profile']);
      }
  
    
    });

  

    }

    deleteTransactionData(transaction){

    this.transactionService.deleteTransaction(transaction).subscribe(res=>{
  // console.log("inside method");
      if (res.state){
      console.log("done deletion");
     //this.router.navigate(['inside/profile']);
    }

  
  });



  }

  viewHistory(transaction){
    
        this.transactionService.viewHistroy(transaction).subscribe(res=>{
      // console.log("inside method");
         this.myhistory=res.history;
    
      
      });
    
    
    
      }
    


  
  updateTransactionData(transaction){
    
     console.log(transaction);
     

   this.transactionService.updateTransaction(transaction).subscribe(res=>{
 // console.log("inside method");
     if (res.state){
     console.log("done updation");
    //this.router.navigate(['inside/profile']);
   }

 
 });



 }
 

    }

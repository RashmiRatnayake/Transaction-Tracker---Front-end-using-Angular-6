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
  myprofile:any;
  supplier:boolean;
  show:boolean;
  mycircle:any;

  amountSettled:number;
  amountPending:number;
  totalAmount:number;
  trnDescription:String;
  remarks:String;
  dueDate:Date;
  trnStatus:String;




 // @Input() data:any; 
  constructor(
    private router:Router,
    private transactionService:TransactionService,
    private userService:UserService,
    private circleService:CircleService,

  ) { }


  
  ngOnInit() {
    
    this.transactionService
        .gettransactions()
        .subscribe(res=>{
          //console.log(res) 
          this.mytransaction = res.transaction
        })

    this.userService
        .getfullProfile()
        .subscribe(res=>{
          this.myprofile=res.user
          if (this.myprofile.length>0 && this.myprofile.userType=="supplier"){
            this.supplier=true
          }
          //else this.supplier=false
        })

    this.circleService
        .getcircle()
        .subscribe(res=>{
          this.mycircle=res.circle
        })   

     
      }
    
      newTransactionData(){
        const newtransaction={
          amountSettled:this.amountSettled,
          amountPending:this.amountPending,
          totalAmount:this.totalAmount,
          trnDescription:this.trnDescription,
          remarks:this.remarks,
          dueDate:this.dueDate,
          trnStatus:this.trnStatus

        };
        
      this.transactionService.addTransaction(newtransaction).subscribe(res=>{
     console.log("inside method");
        if (res.state){
        console.log("done");
       //this.router.navigate(['inside/profile/mytransactions']);
      }
  
    
    });

  

    }


    }

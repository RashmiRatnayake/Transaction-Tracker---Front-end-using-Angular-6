import { Component, OnInit , Input } from '@angular/core';
import {TransactionService} from '../../../../service/transaction/transaction.service';

@Component({
  selector: 'app-mytransactions',
  templateUrl: './mytransactions.component.html',
  styleUrls: ['./mytransactions.component.css']
})
export class MytransactionsComponent implements OnInit {

  transaction:any;
  mytransaction:any;

  @Input() data:any; 
  constructor(

    private transactionService:TransactionService

  ) { }


  
  ngOnInit() {
    
    this.transactionService
        .gettransactions()
        .subscribe(res=>{
          console.log(res) 
          this.mytransaction = res.transaction
        })

    



  }

}

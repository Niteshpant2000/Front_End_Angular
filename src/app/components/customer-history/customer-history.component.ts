import { Component } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Transaction } from '../../pojos/Transaction';
import { Inventory } from 'src/app/pojos/Inventory';

@Component({
  selector: 'app-customer-history',
  templateUrl: './customer-history.component.html',
  styleUrls: ['./customer-history.component.css']
})
export class CustomerHistoryComponent {
  transactions!:Transaction[];
  products!:Inventory[];
  constructor(private restService:RestService){
    this.restService.getTransactionByCustomerId(RestService.customerId).subscribe(transaction=>{this.transactions=transaction as Transaction[]})
  
  }
  view(transaction:Transaction){
    let productDetails:string=transaction.productDetails;
    this.products=JSON.parse(productDetails);
  }

}

import { Component } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Transaction } from '../../pojos/Transaction';

@Component({
  selector: 'app-customer-history',
  templateUrl: './customer-history.component.html',
  styleUrls: ['./customer-history.component.css']
})
export class CustomerHistoryComponent {
  transactions!:Transaction[];
  constructor(private restService:RestService){
    this.restService.getAllInventory().subscribe(transaction=>{this.transactions=transaction as Transaction[]})
  }

}

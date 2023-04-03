import { Component } from '@angular/core';
import { Inventory } from 'src/app/pojos/Inventory';
import { Transaction } from 'src/app/pojos/Transaction';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-view-orders-admin',
  templateUrl: './view-orders-admin.component.html',
  styleUrls: ['./view-orders-admin.component.css']
})
export class ViewOrdersAdminComponent {
  transactionList!:Transaction[];
  products!:Inventory[];
  transactionId:number=0;
  check:boolean=false;
  constructor(private restService:RestService){
    this.restService.getTransaction().subscribe(transaction=>{this.transactionList=transaction as Transaction[]})
  }

  ngOnInit(): void {
      
  }

  tempId!:number;

  view(transaction:Transaction, index:number){
    this.tempId = index;
    this.check=true;
    let productDetails:string=transaction.productDetails;
    this.products=JSON.parse(productDetails);
  }

}

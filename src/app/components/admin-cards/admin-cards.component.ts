import { Component, OnInit } from '@angular/core';
import { Cashier } from 'src/app/pojos/Cashier';
import { Inventory } from 'src/app/pojos/Inventory';
import { Transaction } from 'src/app/pojos/Transaction';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-admin-cards',
  templateUrl: './admin-cards.component.html',
  styleUrls: ['./admin-cards.component.css']
})
export class AdminCardsComponent implements OnInit {
  employeeCount: number = 0;
  productCount: number = 0;
  transactionCount: number = 0;

  constructor(private restService: RestService){
      this.getCount();
  }  
  ngOnInit(){
  }

  getCount(){
    this.restService.getEmployee().subscribe(employeeList=>{this.employeeCount=employeeList.length});
    
    this.restService.getAllInventory().subscribe(productList=>{this.productCount=productList.length});
    
    this.restService.getTransaction().subscribe(transactionList=>{this.transactionCount=transactionList.length});
  }

}

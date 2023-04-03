import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-employee-cards',
  templateUrl: './employee-cards.component.html',
  styleUrls: ['./employee-cards.component.css']
})
export class EmployeeCardsComponent implements OnInit {
  customerCount: number = 0;
  productCount: number = 0;
  transactionCount: number = 0;

  constructor(private restService: RestService){
      this.getCount();
  }  
  ngOnInit(){
  }

  getCount(){
    this.restService.getCustomer().subscribe(customerList=>{this.customerCount=customerList.length});
    
    this.restService.getAllInventory().subscribe(productList=>{this.productCount=productList.length});
    
    this.restService.getTransaction().subscribe(transactionList=>{this.transactionCount=transactionList.length});
  }
}

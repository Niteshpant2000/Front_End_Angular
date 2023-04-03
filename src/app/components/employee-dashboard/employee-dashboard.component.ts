import { Component, OnInit } from '@angular/core';
import { Inventory } from 'src/app/pojos/Inventory';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  productList!:Inventory[];


  constructor(private restService:RestService){
    this.restService.getAllInventory().subscribe(product=>{this.productList= product as Inventory[]})
  }

  ngOnInit(){
      
  }


}

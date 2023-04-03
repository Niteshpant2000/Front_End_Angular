import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddProductComponent } from '../add-product/add-product.component';
import { RestService } from 'src/app/services/rest.service';
import { Inventory } from 'src/app/pojos/Inventory';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  
  productList!:Inventory[];
  constructor(public dialog: MatDialog,private restService:RestService){
    this.restService.getAllInventory().subscribe(product=>{this.productList=product as Inventory[]})

  }


  ngOnInit(): void {
  }

  addProduct(){
    
  }

}

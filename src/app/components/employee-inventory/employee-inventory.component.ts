import { Component } from '@angular/core';
import { Inventory } from '../../pojos/Inventory';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-employee-inventory',
  templateUrl: './employee-inventory.component.html',
  styleUrls: ['./employee-inventory.component.css']
})
export class EmployeeInventoryComponent {

  id !: string;
  name !: string;
  description !: string;
  cost !: number;
  rating !: number;
  manufacturer !: string;
  discount !: number;
  quantity !: number;
  productList!:Inventory[];
  
  constructor(private restService : RestService){
    this.restService.getAllInventory().subscribe(product=>{this.productList=product as Inventory[]})
  }

  ngOnInit(){}

  productId !: string;

  inventoryList !: Inventory[];
  
  // get Inventory
  getInventory(){
    this.restService.getAllInventory().subscribe(
      data => {
        this.inventoryList = data;
      }, err =>
       console.log(err)
    )
  }

  productObj !: Inventory;
  // add a new product
  addproduct(){
    this.productObj = new Inventory(this.id, this.name, this.description, this.cost, this.rating, this.manufacturer, this.discount, this.quantity);

    console.log(this.productObj);
    
    this.restService.addProduct(this.productObj).subscribe(data => {
      console.log(data);
    },
      err => console.log(err)
    );
  }

  fetchId !: string;
  // get product by id
  getInventoryByid(fetchId: string){
    this.restService.getInventoryById(fetchId).subscribe(
      data => {
        this.inventoryList = data;
      }, err => console.log(err)
    )
  }

  // remove a product
  deleteProduct(id: string){
    this.restService.removeProduct(id).subscribe(data => {
      this.inventoryList = data;
    }, err =>
    console.log(err)
    )
  }

}


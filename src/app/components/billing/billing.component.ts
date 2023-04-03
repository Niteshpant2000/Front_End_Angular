import { Component, OnInit, ChangeDetectionStrategy,Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Inventory } from 'src/app/pojos/Inventory';
import { Transaction } from 'src/app/pojos/Transaction';
import { RestService } from 'src/app/services/rest.service';

import { Customer } from 'src/app/pojos/Customer';
@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit{
  show!:boolean;
  products!:Inventory[];    // new bill for user
  prod!:Inventory[];        // all inventory
  grandTotal!:number;
  transaction!:Transaction;


  //customer
  form !: FormGroup;
  title !: string;
 
  name !: string;
  phoneNumber !: number;
  email !: string;
  constructor(private fb : FormBuilder, private restService:RestService){ 
    this.restService.getAllInventory().subscribe(product=>{this.prod=product as Inventory[]})
    this.products=[];
    this.show=true;
    this.grandTotal=0;
  }
  
  ngOnInit(): void {
    this.form = this.fb.group({
   
      name : ['', [Validators.required]],
      phoneNumber : ['',[Validators.required] ],
      email : ['' , [Validators.required]],
    })
 
  }

  addCustomer(){
    /*if(this.name==="" || this.phoneNumber === 0 || this.email === ""){
      alert("OOPSIE!! Looks like some field is wrong.");
    }*/

    let customer:Customer=new Customer(this.name,this.phoneNumber,this.email);
    this.restService.addCustomer(customer).subscribe()
  }

  cancelCustomer(){
    this.name = ''; 
    this.phoneNumber = 0;
    this.email = '';
  }


  remove(product:Inventory){
    for(let index in this.products){
      
      if(this.products[index].id==product.id){
        
        let quantity=this.products[index].quantity;
        this.products[index].quantity-=1;
        product.quantity+=1;
        this.grandTotal-=product.cost;
        if(this.products[index].quantity==0){
          this.products.splice(parseInt(index),1);
          break;
        }
    }
  }
  }


  updateProduct(){
    console.log('here')
    for(let i of this.prod){
      this.restService.updateInventory(i,false).subscribe();
      console.log("now check");

    }
  }

  addToBilling(product:Inventory){
    
    for(let index in this.products){
        if(this.products[index].id==product.id){
          product.quantity-=1;
          let quantity=this.products[index].quantity;
          this.products[index].quantity+=1;
          this.show=false;
          this.grandTotal+=product.cost;
          break;
      }
    }
    if(this.show==true){
      let newProduct:Inventory=new Inventory(product.id,product.name,product.description,product.cost,product.rating,product.manufacturer,product.discount,1);
      this.products.push(newProduct);
      product.quantity-=1;
      this.grandTotal+=product.cost;
    }

    this.show=true;
  }

  addTransactionFunc(){
    let productDetails:string = JSON.stringify(this.products);
    let transaction:Transaction = new Transaction(this.phoneNumber,Date(),productDetails,this.grandTotal,"UPI");
    this.restService.addTransaction(transaction).subscribe();
  }

  printContents:any;

  printReceipt(){
    this.printContents = document.querySelector('#printable') as HTMLElement;
    let originalContent = document.body.innerHTML;
    
    document.body.innerHTML = this.printContents.innerHTML;
    window.print();
    document.body.innerHTML = originalContent;
  }

  pushToTransaction(){
    if(this.grandTotal == 0){
      alert("OOPSIE!! Looks like you forgot to add product.");
      return;
    }

    // add to transaction table
    this.addTransactionFunc();

    this.updateProduct();

    // implementing print feature
    this.printReceipt();
  }
}
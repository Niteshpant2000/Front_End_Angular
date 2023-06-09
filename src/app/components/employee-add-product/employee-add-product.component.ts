import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Inventory } from 'src/app/pojos/Inventory';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-employee-add-product',
  templateUrl: './employee-add-product.component.html',
  styleUrls: ['./employee-add-product.component.css']
})
export class EmployeeAddProductComponent implements OnInit{
  
  form !: FormGroup;
  title !: string;

  id !: string;
  name !: string;
  manufacturer !: string;
  price !: number;
  quantity !: number;
  discount !: number;
  description !: string;
  rating !: number;
  

  constructor(
    private fb : FormBuilder,private restService:RestService
  ){}

  ngOnInit(): void {
    this.form = this.fb.group({
      id: ['', [Validators.required]],
      name : ['', [Validators.required]],
      manufacturer : ['' , [Validators.required]],
      price : ['',[Validators.required] ],
      quantity : ['', [Validators.required]],
      description : ['', [Validators.required]]
    })
  }
 
  clearForm(){
    this.discount = 0;
    this.rating = 0;
    this.id = '';
    this.name = '';
    this.manufacturer = '';
    this.price = 0;
    this.quantity = 0;
    this.description = '';
  }

  addProduct(){
    let product:Inventory=new Inventory(this.id,this.name,this.description,this.price,this.rating,this.manufacturer,this.discount,this.quantity);
    this.restService.addProduct(product).subscribe()
    
  }

  cancelProduct(){
    this.clearForm();
  }

  setRating(n : number){
    this.rating = n;
    console.log(n);
  }
}

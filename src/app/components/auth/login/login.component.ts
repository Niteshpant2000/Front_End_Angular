import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cashier } from 'src/app/pojos/Cashier';
import { Customer } from 'src/app/pojos/Customer';
import { AuthService } from 'src/app/services/auth.service';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  username : string = '';
  password : string = '';
  role : string = '';
  checkRole=true;
  


  authRequest: any={
    "userName" : "",
    "password" : "",
    "role" : ""
  };
  roles !: string[];

  constructor(private authService : AuthService, private router : Router, private restService : RestService) { 
    this.roles = [
      'admin',
      'Employee',
      'Customer'
    ]
  }

  ngOnInit(): void {
    this.username = '';
    this.password = '';
    this.getEmployees();
    this.getCustomers();
  }

  employeeList !: Cashier[];


  // get all employees
  getEmployees(){
    this.restService.getEmployee().subscribe(
      data =>{  
        this.employeeList = data;
      }, err => console.log(err)
    )
  }

  customerList !: Customer[];
  // get all customer
  getCustomers(){
    this.restService.getCustomer().subscribe(
      data =>{  
        this.customerList = data;
      }, err => console.log(err)
    )
  }

  changeCheckRole(){
    if(this.role=="Customer"){
      this.checkRole=false;
    }
    else{
      this.checkRole=true;
    }
    
  }

  login() {
   
    if(this.username == "admin" && this.password == "admin" && this.role == "admin"){
      alert("Admin Login Successfull");
      this.router.navigate(['admin-dashboard']);
    }

    if(this.role == "Employee"){
      const user = this.employeeList.find((emp : any) =>{
        return (emp.name === this.username || emp.email === this.username) && emp.phoneNumber === this.password
      });

      if(user){
        alert("Employee Login Successfull");
        this.router.navigate(['employee-dashboard']);
      } else{
        alert("User Not Found, Enter correct Credentials...");
      }
    }

    if(this.role == "Customer"){
      
      const user = this.customerList.find((cust : any) =>{
        return (cust.phoneNumber === parseInt(this.username) )
      });

      if(user){
        alert("Customer Login Successfull");
        RestService.customerId=this.username;
        this.router.navigate(['customer-dashboard']);
      } else{
        alert("User Not Found, Enter correct Credentials...");
      }
    }
  }
}

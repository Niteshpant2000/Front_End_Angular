import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  username : string = '';
  password : string = '';
  role : string = '';

  authRequest: any={
    "userName" : "",
    "password" : "",
    "role" : ""
  };
  roles !: string[];

  constructor(private authService : AuthService, private router : Router) { 
    this.roles = [
      'admin',
      'Employee',
      'Customer'
    ]
  }

  ngOnInit(): void {
    this.username = '';
    this.password = '';
  }

  login() {
   

    if(this.username == "admin" && this.password == "admin" && this.role == "admin"){
      alert("Login Successfull");
      this.router.navigate(['admin-dashboard']);
    }

    if(this.username == "employee" && this.password == "employee" && this.role == "Employee"){
      alert("Login Successfull");
      this.router.navigate(['employee-dashboard']);
    }

    if(this.username == "customer" && this.password == "customer" && this.role == "Customer"){
      alert("Login Successfull");
      this.router.navigate(['customer-dashboard']);
    }
  //   this.user.username = this.username;
  //   this.user.password = this.password;
  //   this.user.role = this.role;

  //   this.authService.login(this.user).subscribe(res => {

  //     if(res == null) {
  //       alert("Uername or password is wrong");
  //       this.ngOnInit();
  //     }else {
  //       console.log("Login successful");
  //       localStorage.setItem("token",res.token);

  //       if(this.role == 'user') {
  //         this.route.navigate(['/user']);
  //       } 

  //       if( this.role == 'admin') {
  //         this.route.navigate(['/admin']);
  //       }

  //     }

  //   }, err => {
  //     alert("Login failed");
  //     this.ngOnInit();
  //   })

  }
}

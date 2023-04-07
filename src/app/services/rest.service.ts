import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cashier } from '../pojos/Cashier';
import { Customer } from '../pojos/Customer';
import { Inventory } from '../pojos/Inventory';
import { Transaction } from '../pojos/Transaction';

@Injectable({
  providedIn: 'root'
})
export class RestService{

  static customerId:string;
  constructor(private http: HttpClient) { }
  

  strUrlInventory : string = "http://127.0.0.1:8084/api/data/inventory"  // api url for inventory microservice
  strUrlEmployee : string = "http://127.0.0.1:8083/api/data/employee"  // api url for employee microservice  
  strUrlCustomer : string = "http://127.0.0.1:8082/api/data/customer"  // api url for customer microservice
  strUrlTransaction : string = "http://127.0.0.1:8085/api/data/transaction"  // api url for transaction microservice

  //get inventory
  getAllInventory():Observable<any>{
    return this.http.get(this.strUrlInventory + '/getInventory');
  }

  //get product by product-id
  getInventoryById(id: string): Observable<any> {
    return this.http.get(this.strUrlInventory + '/getInventory/' + id);
  }


  // add a new product 
  addProduct(invObj: Inventory): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(invObj);
    console.log(body);
    return this.http.post(this.strUrlInventory + '/addProduct', body, { 'headers': headers });
  }

  // update inventory
  updateInventory(invObj: Inventory, check:boolean): Observable<any> {
    let editUrl = this.strUrlInventory + "/updateInventory/"+check;
    return this.http.put(editUrl, invObj);
  }

  // delete a product
  removeProduct(id: string): Observable<any>{
    return this.http.delete(this.strUrlInventory + '/removeProduct' + id);
  }

  //get Employees
  getEmployee():Observable<any>{
    return this.http.get(this.strUrlEmployee + '/getEmployee');
  }

  //get employee by emp-id
  getEmployeeById(id: number): Observable<any> {
    return this.http.get(this.strUrlEmployee + '/getEmployee/' + id);
  }


  // add a new employee 
  addEmployee(cashier: Cashier): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(cashier);
    console.log(body);
    return this.http.post(this.strUrlEmployee + '/addEmployee', body, { 'headers': headers });
  }

  // update employee details
  updateEmployee(cahier: Cashier): Observable<any> {
    let editUrl = this.strUrlEmployee + "/updateEmployee";
    return this.http.put(editUrl, cahier);
  }

  //delete an employee
  deleteEmployeee(id: string): Observable<any> {
    let deleteUrl = this.strUrlEmployee + '/removeEmployee/' + id;
    return this.http.delete(deleteUrl);
  }

  //add Customer
  addCustomer(customer: Customer): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(customer);
    console.log(body);
    return this.http.post(this.strUrlCustomer + '/addCustomer', body, { 'headers': headers });
  }

  //get all Customers
  getCustomer():Observable<any>{
    return this.http.get(this.strUrlCustomer + '/getCustomer');
  }

  //add billing details to transactions
  addTransaction(transaction:Transaction): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(transaction);
    console.log(body);
    return this.http.post(this.strUrlTransaction + '/addTransaction', body, { 'headers': headers });
  }

  //get all Transactions
  getTransaction():Observable<any>{
    return this.http.get(this.strUrlTransaction + '/getTransaction');
  }

  getTransactionByCustomerId(id:string):Observable<any>{
    return this.http.get(this.strUrlTransaction+'/getTransactionByCustomerId/'+id);
  }
}

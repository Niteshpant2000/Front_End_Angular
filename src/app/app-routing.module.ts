import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { LoginComponent } from './components/auth/login/login.component';
import { BillingComponent } from './components/billing/billing.component';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { EmployeeCardsComponent } from './components/employee-cards/employee-cards.component';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { EmployeeInventoryComponent } from './components/employee-inventory/employee-inventory.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ViewOrdersComponent } from './components/view-orders/view-orders.component';
import { EmployeeAddProductComponent } from './components/employee-add-product/employee-add-product.component';
import { ViewOrdersAdminComponent } from './components/view-orders-admin/view-orders-admin.component';
import { CustomerHistoryComponent } from './components/customer-history/customer-history.component';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'Home', component : HomeComponent},
  {path : 'footer', component : FooterComponent},
  {path : 'login', component : LoginComponent},
  {path : 'admin-dashboard', component: AdminDashboardComponent},
  {path : 'manage-inventory', component : InventoryComponent},
  {path : 'admin-layout', component : AdminLayoutComponent},
  {path : 'manage-employee', component: EmployeeComponent},
  {path : 'employee-dashboard', component : EmployeeDashboardComponent},
  {path : 'employee-cards', component : EmployeeCardsComponent},
  {path : 'add-product', component : AddProductComponent},
  {path : 'billing', component : BillingComponent},
  {path : 'manage-employee', component : EmployeeComponent},
  {path : 'add-employee', component : AddEmployeeComponent},
  {path : 'add-customer', component : AddCustomerComponent},
  {path : 'employee-inventory', component : EmployeeInventoryComponent},
  {path : 'customer-dashboard', component : CustomerDashboardComponent},
  {path : 'view-orders', component : ViewOrdersComponent},
  {path : 'add-products', component : EmployeeAddProductComponent},
  {path : 'view-orders-admin', component : ViewOrdersAdminComponent},
  {path : 'customer-history', component : CustomerHistoryComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';


import { NgModule } from '@angular/core';
import {FormsModule}   from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { Http, Headers, Response, RequestOptions } from '@angular/http';
import {RouterModule,Routes} from '@angular/router';
import { EmployeesService } from './employees.service';


import { AppComponent } from './app.component';


import { HomeComponent } from './home/home.component';
import { AdminviewComponent } from './admin/adminview/adminview.component';

import { AddemployeeComponent } from './admin/addemployee/addemployee.component';
import { UpdateemployeComponent } from './admin/updateemploye/updateemploye.component';
import { AddreviewComponent } from './employee/addreview/addreview.component';
import { UpdatereviewComponent } from './employee/updatereview/updatereview.component';
import { EmployeeviewComponent } from './employee/employeeview/employeeview.component';
import { LoginComponent } from './login/login.component';





const approutes: Routes=[
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'home/adminview',
    component:AdminviewComponent
  },
  {
    path:'home/employeeview',
    component:EmployeeviewComponent
  },
  {
    path:'adminview/addemployee',
    component:AddemployeeComponent
  },
  {
    path:'adminview/addreview',
    component:AddreviewComponent
  },
  {
    path:'home/adminview/updateemp/:empno',
    component:UpdateemployeComponent
  },
  {
    path:'home/adminview/updatereview/:reviewno',
    component:UpdatereviewComponent
  }
]



@NgModule({
  declarations: [
    AppComponent,
 
    HomeComponent,
    AdminviewComponent,
   EmployeeviewComponent,
    AddemployeeComponent,
    UpdateemployeComponent,
    AddreviewComponent,
    UpdatereviewComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
   
    RouterModule.forRoot(approutes)


  ],
  providers: [EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

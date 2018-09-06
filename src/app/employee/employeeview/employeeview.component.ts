import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../employees.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-employeeview',
  templateUrl: './employeeview.component.html',
  styleUrls: ['./employeeview.component.css']
})
export class EmployeeviewComponent implements OnInit {


  employee=[];
  constructor(private router:Router,private employeesservice:EmployeesService) { 
    this.employeesservice.getemployee()
  .subscribe(employee => {
    console.log(employee);
    this.employee = employee
  })
  }
  delete(reviewno) {

    var del = {
      reviewno:reviewno
    }
    console.log(del);


    var result = this.employeesservice.delete(del)
      .subscribe(res => {
        if (res.success == "true") {
          //this.com.unshift(newuser)
        }
      });


  }

  

  ngOnInit() {
  }

}

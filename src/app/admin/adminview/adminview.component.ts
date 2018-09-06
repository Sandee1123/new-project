import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../employees.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.css']
})
export class AdminviewComponent implements OnInit {

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

  update(empno)
  {
    var eid={
      empno:empno
  
    }
  
  console.log(eid);
  this.router.navigate(['home/adminview/updateemp/',+empno])
  
  }
  

  ngOnInit() {
  }

}

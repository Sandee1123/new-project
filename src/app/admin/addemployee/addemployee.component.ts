import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../employees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  empno=[];
  name=[];
  salary=[];

  constructor(private router: Router, private employeeservice: EmployeesService) { }

  addemployee(e) {
    var newdata = {
      
      empno: this.empno,
      name: this.name,
      salary: this.salary,

    }
    console.log(newdata);
    var result = this.employeeservice.saveemployee(newdata)
      .subscribe(res => {

        if (res.success == "true") {

        }
        console.log(res);

      });
  }


  ngOnInit() {
  }

}

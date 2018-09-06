import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from '../../employees.service';

@Component({
  selector: 'app-updateemploye',
  templateUrl: './updateemploye.component.html',
  styleUrls: ['./updateemploye.component.css']
})
export class UpdateemployeComponent implements OnInit {

  editemp=[];
  constructor(private route: ActivatedRoute, private employeeservice: EmployeesService) {

    let empno = this.route.snapshot.params['empno'];
    console.log('EditemployeeSkillsComponent' + empno);

    this.employeeservice.getEmpno(empno).
    subscribe(data => {
      this.editemp = data;

      console.log(this.editemp);

    })
  }
  updateemployee(e){
    
      var edit = {
        empno: e.empno,
        name: e.name,
        salary: e.salary,
        
      }
  
      console.log(edit);
      var result = this.employeeservice.update(edit)
        .subscribe(res => {
  
          console.log(res);
        })
    
  }
  ngOnInit() {
  }

}

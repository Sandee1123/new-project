import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../employees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addreview',
  templateUrl: './addreview.component.html',
  styleUrls: ['./addreview.component.css']
})
export class AddreviewComponent implements OnInit {


  reviewno: String;
  review: String;
  empno: String

  constructor(private router: Router, private employeeservice: EmployeesService) { }

  addreview(e) {
    var newdata = {

      reviewno: this.reviewno,
      review: this.review,
      empno: this.empno

    }
    console.log(newdata);
    var result = this.employeeservice.savereview(newdata)
      .subscribe(res => {

        if (res.success == "true") {

        }
        console.log(res);

      });
  }


  ngOnInit() {
  }

}

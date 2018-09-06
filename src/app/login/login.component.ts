import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username=[];
  password=[];

  constructor(private router:Router,private employeesservice:EmployeesService){ }
  
  


  ngOnInit() {
  }

  loginUser(e) {

    e.preventDefault();
      console.log(e);
      var username= e.target.elements[0].value;
      var password= e.target.elements[1].value;

     if(username == "admin" && password == "admin")
     {
       this.router.navigate(["home"]);
     }
     else{
       alert("username and password invalid")
     }

    
    


  }
}

import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeesService {

  constructor(private http:Http) { }
  
  
  getemployee() {
    return this.http.get('api/getjoindata')
      .map(res => res.json());
  }
  getemployees() {
    return this.http.get('api/get')
      .map(res => res.json());
  }
 
  getEmpno(empno) {
    console.log('services' + empno);
    return this.http.get('api/currentemp/' + empno)
      .map(res => res.json());
  }


  saveemployee(newdata) {
    let headers = new Headers({ 'content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('api/insertdata', JSON.stringify(newdata), options)
      .map((response: Response) => response.json());
  }
  savereview(newdata) {
    let headers = new Headers({ 'content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('api/insertreview', JSON.stringify(newdata), options)
      .map((response: Response) => response.json());
  }

  update(edit) {
    console.log('update' + edit)
    let headers = new Headers({ 'content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put('api/updatedata', JSON.stringify(edit), options).map((response: Response) => response.json());

  }
  loginUser(data){
    let headers =new Headers({'content-Type':'application/json'});
    let options=new RequestOptions({headers:headers});
    return this.http.post('validate/login',JSON.stringify(data),options)
    .map((response :Response)=>response.json());
   }


  delete(del) {
    console.log('termination is initiated ')
    //console.log(del);
    let headers = new Headers({ 'content-Type': 'application/json' });
    let options = new RequestOptions({ body: del });

    return this.http.delete('api/deletedata', options).map((response: Response) => response.json());

  }
}

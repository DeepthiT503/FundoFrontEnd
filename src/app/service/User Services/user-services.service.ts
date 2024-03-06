import { HttpSentEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServicesService } from '../HttpServices/http-services.service';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(private http:HttpServicesService) { }

  userLogin(data:object){
    return this.http.loginApiCall("User/login", data);
  }
  
  userRegister(data:object){
    return this.http.registerApiCall("User/Register", data);
  }
  
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:9595"

  constructor(private http:HttpClient) { }
//calling the server to generate token
generatetoken(credentilas:any){
  return this .http.post(`${this.url}/token`,credentilas);
}

  //method for login user
  loginUser(token: string){
    localStorage.setItem("token",token);
    return true;
  }

  //check user is login or not
   isLoggedIn(){
    let token=localStorage.getItem("token");
    if(token==undefined || token=='' || token==null){
      return false;
    }else{
       return true;
    }
   }
//for logout
   logout(){
    localStorage.removeItem('token');
    return true;
   }

   //for getting token
   getToken(){
    return localStorage.getItem("token");

   }
}

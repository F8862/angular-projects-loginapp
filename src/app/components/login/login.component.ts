import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  credentials={
    username:'',
    password:''
  }

  constructor(private loginService:LoginService){}
  ngOnInit(): void {
    
  }

  onSubmit(){
    console.log("from submitted");
    if((this.credentials.username!='' && this.credentials.password!='') || (this.credentials.username!=null && this.credentials.password!=null)){
      console.log("we have to submit the form to server");
      //generate token
      this.loginService.generatetoken(this.credentials).subscribe(
        (response:any)=>{
          //token generate successfully
console.log(response.token);
this.loginService.loginUser(response.token);
window.location.href="/dashboard";
        },
        error=>{
          console.log(error);
        }
      )
    }else{
      console.log("Fields are Empty!!");
    }
  }

}

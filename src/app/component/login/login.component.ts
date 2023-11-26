import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
// import { Console, error } from 'console';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm!:FormGroup
  isLoginmode=false
  errorMessage!:string
  testing = new FormControl()
  constructor(
    private fb:FormBuilder,
    private login:LoginService,
    private router:Router,
    private api:ApiService
  ) { }

  ngOnInit(): void {
    this.LoginForm=this.fb.group({
      UserName:"",
      Password:''
    })
  }

  isSignup(){
    this.isLoginmode=!this.isLoginmode
  }

  testData(value:any){
    // console.log(value)
    // console.log(this.testing.value)
    if(value){
      var file =value
     var formData= new FormData()
     formData.append('file',file)
      this.api.uploadFile(formData).subscribe((res:any)=>{
        console.log(res)
      })
      debugger
    }
  }


  Login(){

    if(this.isLoginmode){
      this.login.SignIn(
        this.LoginForm.value.UserName,
        this.LoginForm.value.Password
        ).subscribe(
          response=>{
            console.log(response);
            this.isLoginmode=true
          this.router.navigate(['/home'])

          },(error)=>{
            console.log(error)
            console.log(error.error.error.message)
            this.errorMessage=error.error.error.message

            
          }
      )
      // this.router.navigate(['/home'])
    }else{
      this.login.SignUp(
        this.LoginForm.value.UserName,
        this.LoginForm.value.Password
      ).subscribe(Response=>{
        console.log(Response);
        this.isLoginmode=true
        this.router.navigate(['/home'])
      },(error)=>{
        this.errorMessage=error.error.error.message
        
        console.log(this.errorMessage)
        
      })
    }
  }
}

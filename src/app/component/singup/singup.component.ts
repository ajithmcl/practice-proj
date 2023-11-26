import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  signUp:boolean=false
  signUpForm!:FormGroup
  constructor(
    private fb:FormBuilder,
    private login:LoginService
    ) { }

  ngOnInit(): void {
    this.signUpForm=this.fb.group({
      firstName:new FormControl(),
      lastName:new FormControl(),
      middleName:new FormControl(),
      DateOfBirth:new FormControl(),
      Gender:new FormControl(),
      dateofBirth:new FormControl(),
      email:new FormControl(),
      Password:new FormControl(),
      confirmPassword:new FormControl(),
      ContactNo:new FormControl(),

    })
  }
  signIn(){
    // this.signUp=!this.signUp
    this.login.register(this.signUpForm.value).subscribe((Response)=>{
      console.log(Response);
      
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName,ReactiveFormsModule, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { authResponsedata } from 'src/app/services/login.service';
// import { error } from 'console';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerform!:FormGroup;
  firstname:any;
  lastname:any;
  isSignin:boolean=false
  isLoading=false
  cities:any=['Hyderabad','Mumbai','Chennai','Pune','Kolkata']
  users:any
  error:string=""
  
  constructor(
    private login:LoginService,
    private fb:FormBuilder,
    private router:Router,
    // private login:LoginService
    ) {
    
   }
   
   message:string='ravi kumar';
   messagetochild:string="";
   messagefromchild:string='';
   kycmessage:string=""
  ngOnInit(): void {
    this.registerform=this.fb.group({
      Email:'',
      Password:'',
      Contact:''
    });

    // this.login.usersub.next(this.messagetochild)
  }
  // post(){
  //   console.log(this.registerform.value);
  //   console.log(this.registerform.value.Email);
    
    
  //   this.login.Login(this.registerform.value).subscribe((response:any)=>{
  //    console.log(response)
  //    this.users=response
  // //    if(this.users.find((users:any)=>(
  // //     users.email==this.registerform.value.Email &&
  // //     users.Password==this.registerform.value.Password)
  // // )){
  // //     this.router.navigate(["/products"])

  // //    }else{
  // //     alert("Invalid credentials")
  // //     this.router.navigate(["/SignUp"])
  // //    }
  //    // if(response){
  //    //   return this.isSignin=true
  //    // }else{
  //    // return this.isSignin=false

  //    // }
  //   }
  //    );
  //   // this.registerform.reset();

  // }

  
  Login(){
    
    // this.login.Login()
  }


  register(){
  this.isLoading=true
  let AuthObs:Observable<authResponsedata>

    if(this.isSignin){

      this.login.SignIn(this.registerform.value.Email,
        this.registerform.value.Password).subscribe(responseData=>{
          console.log(responseData);
        this.router.navigateByUrl("/products")

        },error=>{
        console.log(error)
        this.isLoading=false
        this.error="An Error Occured"})
    }else{
      this.login.SignUp(this.registerform.value.Email,
      this.registerform.value.Password).subscribe(resposeData=>{
        console.log(resposeData);
      this.router.navigateByUrl("/products")

      },error=>
      this.error="An Error Occured")
      this.isLoading=false
      this.registerform.reset()
  }
   
}



  getmessage(){
    this.messagetochild="i am good"
  }
  getdata(e:any){
    this.kycmessage=e
  }
  collectdata(e:any){
    alert(e);
    this.messagefromchild=e;
  }
}

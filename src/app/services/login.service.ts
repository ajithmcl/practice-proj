import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, Subject} from 'rxjs';
import { Iuserregistration } from 'src/models/user.model';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { tap } from 'rxjs/operators';
import { user } from '../auth/user.model';
import { Router } from '@angular/router';

export interface authResponsedata{
  
idToken:	string	,
email	:string	,
refreshToken:	string	,
expiresIn:	string	,
localId:	string,
registered?:boolean	
}
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl= environment.baseUrl;
  // newUser= new BehaviorSubject<user>()
  usersub=new Subject<user>()
  latestUser=new BehaviorSubject<any>("null")
  constructor(
    private http:HttpClient,
    private router:Router
    ) { }

  register(request:Iuserregistration){
    return this.http.post(`${this.baseUrl}/post.json`,request)
  }

  SignUp(Email:string,Password:string){
    return this.http.post<authResponsedata>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBRavJvUHTLlzGY92fM1_ZgS4vGyHsLjho",
    {
      email:Email,
      password:Password,
      returnSecureToken:true
    }
    ).pipe(tap(this.handleUser.bind(this)))
  }



 



  SignIn(Email:string,password:string){
    return this.http.post<authResponsedata>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBRavJvUHTLlzGY92fM1_ZgS4vGyHsLjho",
    {
      email:Email,
      password:password,
      returnSecureToken:true
    }
    
    ).pipe(tap(this.handleUser.bind(this)))
  }

  private handleUser(response:authResponsedata){
    const expirationDate= new Date(new Date().getTime() + +response.expiresIn*1000)
      const User =new user(
        response.email,
        response.localId,
        response.idToken,
        expirationDate,
      )
      
      this.usersub.next(User)
      // this.newUser.next(User)
      this.latestUser.next(User)
  }




}

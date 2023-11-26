import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-homeheader',
  templateUrl: './homeheader.component.html',
  styleUrls: ['./homeheader.component.css']
})
export class HomeheaderComponent implements OnInit {

  userName!:""
  constructor(
    private login:LoginService
  ) { }

  ngOnInit(): void {
    this.login.latestUser.subscribe((res:any)=>{
      this.userName=res.email
    })
  }

}

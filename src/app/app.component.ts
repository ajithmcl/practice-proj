import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mining-rigister';
  message:string="BabuRao Macherla"
  time:Date=new Date()
  userName:any
  mailName:any
  ngOnInit(): void {
    
  }
  recieve(event:any){
    this.message=event
  }
 

}

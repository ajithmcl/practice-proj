import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  @Output() action:EventEmitter<any>= new EventEmitter()
  @Input() details:string='';
  @Input() messagefromparent:string="";
  messagetoparent:string='i am good!';
  kycstatus:string="success"
  @Output() message:EventEmitter<string>=new EventEmitter()
  @Output() sendmessage:EventEmitter<string>=new EventEmitter<string>();
   
  
  constructor() { }

  ngOnInit(): void {

  }

  send(){
    this.sendmessage.emit(this.messagetoparent)
  }

  get(){
    this.message.emit(this.kycstatus)
  }
  
 

}

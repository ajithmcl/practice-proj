import { Injectable,Output,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatashringService {
 details:any
  constructor() { }

  senddata(data: any){
    this.details=data
  }
  getdata(){
    return this.details
  }

  settravelData(data:any){
    this.details=data
  }

  gettravelData(){
    return this.details
  }
}

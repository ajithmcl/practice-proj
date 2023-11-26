import { Component, Input, OnInit ,Output} from '@angular/core';
import { AddtoCartService } from 'src/app/addto-cart.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  totalItem=0
  searchTerm:string=''
  @Output() message=new EventEmitter<string>()
  @Input() username!:string
  @Input() time!:Date
  @ Input() mailName:any
  userName:string="Baburao Macherla"
  loginTime:Date=new Date()
  constructor(private cart:AddtoCartService) { }

  ngOnInit(): void {
    this.cart.getproduct().subscribe((res:any)=>{
      this.totalItem=res.length
    })
  }

  sendData(){
    this.message.emit(this.userName)
  }

  Search(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value
    console.log(this.searchTerm);
    this.cart.search.next(this.searchTerm)

  }

  
}

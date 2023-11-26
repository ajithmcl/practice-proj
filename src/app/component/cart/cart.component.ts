import { Component, OnInit } from '@angular/core';
import { AddtoCartService } from 'src/app/addto-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products:any=[]
  grandtotal=0
  constructor(private cart:AddtoCartService) { }

  ngOnInit(): void {
    this.cart.getproduct().subscribe((res:any)=>{
      this.products=res
      this.grandtotal=this.cart.gettotal()
    })
  }

  removeitem(item:any){
    this.cart.removeitem(item)
  }
  emptycart(){
    this.cart.removecart()
  }

}

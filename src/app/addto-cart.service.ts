import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class AddtoCartService {
  cartList:any=[]
  productList=new BehaviorSubject<any>([])
  search=new BehaviorSubject<string>('')
  constructor() { }

  getproduct(){
   return this.productList.asObservable()
  }

  setproduct(product:any){
    this.cartList.push(...product)
    this.productList.next(this.cartList)
    
  }

  addtocart(product:any){
    this.cartList.push(product)
    this.productList.next(this.cartList)
    this.gettotal()
    console.log(this.cartList);
    
  }
  gettotal():number{
    let totalprice=0
    this.cartList.map((a:any)=>{
      totalprice +=a.total
    })
    return totalprice
  }

  removeitem(product:any){
    this.cartList.map((a:any,index:any)=>{
      if(product.id === a.id){
        this.cartList.splice(index,1)
      }
    })
    this.productList.next(this.cartList)
  }

  removecart(){
    this.cartList=[]
    this.productList.next(this.cartList)
  }

}

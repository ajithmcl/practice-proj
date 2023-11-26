import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AddtoCartService } from 'src/app/addto-cart.service';
import { ApiService } from 'src/app/services/api.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList:any
  searchKey:string=''
  filterCategory:any
  isAuthenticated:boolean=false
  @Output() mailsender:EventEmitter<any>=new EventEmitter<any>()
  mailName:any
  constructor(private api:ApiService,
              private cart:AddtoCartService,
              private login:LoginService) { }

  ngOnInit(): void {
    // debugger
    // this.login.usersub.subscribe(User=>{

    //   this.isAuthenticated= User? true:false
    //   console.log(this.isAuthenticated);
    //   this.mailName= User.email
      
    // })
    this.login.latestUser.subscribe(
      User=>{

        this.isAuthenticated= User? true:false
        console.log(this.isAuthenticated);
        this.mailName= User.email
        
      }
    )


    this.api.getproducts().subscribe((res:any)=>{
      this.productList=res
      this.filterCategory=res
      this.productList.forEach((a:any) => {
        if(a.category==="men's clothing"||a.category==="women's clothing"){
          a.category="fashion"
        }

        Object.assign(a,{quantity:1,total:a.price})
      });
      console.log(this.productList);

      
    })
    this.cart.search.subscribe((val:any)=>{
      this.searchKey=val
    })
  }

  addtocart(item:any){
    this.cart.addtocart(item)
  }

  // sendUser(){
  //   this.mailsender.emit(this.mailName)
  // }

  filter(category:string){
    console.log(category);
    
    this.filterCategory=this.productList
    .filter((a:any)=>{
      if(a.category==category||category==''){
        return a
      }
    })
  }

  
}

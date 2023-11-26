import { Component, OnInit,DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit ,DoCheck {
  displayColums:string[]=["code","name","price","remarks","action"];
  productdata:any;
  islisting=true;
  constructor(
    private api:ApiService,
    private route:Router
  ) { }
  ngDoCheck(): void {
    // throw new Error('Method not implemented.');
    let currentUrl= this.route.url
    if(currentUrl=="/product-details"){
      this.islisting=true
    }else{
      this.islisting=false
    }
  }

  ngOnInit(): void {
  }

  

}

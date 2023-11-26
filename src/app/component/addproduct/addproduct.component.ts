import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  productForm!:FormGroup
  detailsForm!:FormGroup
  constructor(
    private http:HttpClientModule,
    private fb:FormBuilder,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.detailsForm=new FormGroup({
    userName:new FormControl(),
    passWord: new FormControl()
    })
  }

  
  initForm(){
    this.productForm=this.fb.group({
      code:["",Validators.required],
      name:["",Validators.required],
      price:["",Validators.required],
      category:["",Validators.required],
      remarks:["0",Validators.required],
      variant:this.fb.array([

      ])
    })
  }

  generateArray(){
    this.productForm.get("variant") as FormArray
  }
}

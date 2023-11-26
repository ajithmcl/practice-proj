import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-manufacture-details',
  templateUrl: './manufacture-details.component.html',
  styleUrls: ['./manufacture-details.component.css']
})
export class ManufactureDetailsComponent implements OnInit {

  beerDetails:any
  page!:number
  perPage!:number
  constructor(
    private API:ApiService,
    private http:HttpClient
  ) { }

  ngOnInit(): void {
    this.manufactureDetails()
  }

  manufactureDetails(){
    this.API.getManufactureDetails().subscribe((res:any)=>{
      console.log(res)
      this.beerDetails=res
    })

  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogboxComponent } from 'src/app/dialogcomponents/dialogbox/dialogbox.component';
import { DatashringService } from 'src/app/services/datashring.service';
import { TravellistService } from 'src/app/services/travellist.service';
declare var window:any
@Component({
  selector: 'app-travel-details',
  templateUrl: './travel-details.component.html',
  styleUrls: ['./travel-details.component.css']
})
export class TravelDetailsComponent implements OnInit {
  TravelDetailsForm!:FormGroup
  formModal:any
  TravelDetails:[]=[]
  countryList:any
  constructor(
    private fb:FormBuilder,
    private dialog:MatDialog,
    private data:DatashringService,
    private route:Router,
    private List:TravellistService
  ) { }

  ngOnInit(): void {

    this.formModal= new window.bootstrap.Modal(
      document.getElementById("exampleModalLabel")
    )

    this.List.cityList().subscribe(result=>{
      this.countryList=result
      console.log(this.countryList);
      
    })

    this.TravelDetailsForm=this.fb.group({
      FirstName:"",
      LastName:'',
      BoardingPoint:'',
      Destination:"",
      days:'',
      TravelDate:"",
      PersonsCount:'',
      HotelPreference:"",
      gender:[]
    })
  }

  checked(){
    console.log(this.TravelDetailsForm.get("gender")?.value);
    
  }


  Savedata(){
    // console.log(this.TravelDetailsForm.value);
    
    this.TravelDetails=this.TravelDetailsForm.value
    console.log(this.TravelDetails);
    
    
  }

  openDialog(){
    const dialogref=this.dialog.open(DialogboxComponent,{
      height:"70%",
      width:"70%",
      disableClose:true,
      data:this.TravelDetails
    })
  }
  
  next(){
    this.data.settravelData(this.TravelDetailsForm.value)
  this.route.navigate(["/seats"])
  }

}

import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { TravellistService } from 'src/app/services/travellist.service';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {
  members:[string,string,string,string]=["Father","mother","son","daughter"]
  Memberdetails!:FormGroup
  memberName!:number
  firstMember:any
  memberIndex:number=0
  x:number=0
  details=[]
  pincodes:{}={
    522612:"Durgi",
    522426:"Macherla",
    500038:"VengalraoNagar,Hyderabad",
    500072:"Kukatpally,Hyderabad"
  }
  place:any
  address=false
  start:number=0
  constructor(
    private fb:FormBuilder,
    private api:ApiService,
    private cityList:TravellistService
  ) { }

  ngOnInit(): void {
    this.Memberdetails=this.fb.group({
      personalDetails:this.fb.array([])
    })
    this.getCityList()
    // this.pushSkills()
    this.policyDetails.push(this.Skills())
    this.firstMember=this.members[0]
  }

  getCityList(){
    this.cityList.cityList().subscribe(
      (res:any)=>{
        console.log(res)
      }
    )
  }
  selectedMember(event:any){
    this.memberName = event.target.value
  }

  get policyDetails():FormArray{
    return this.Memberdetails.get("personalDetails") as FormArray
  }

  Skills():FormGroup{
    return this.fb.group({
      firstName:new FormControl("",[Validators.required]),
      lastName:new FormControl("",[Validators.required]),
      age:new FormControl("",[Validators.required]),
      address:new FormControl("",[Validators.required]),
      index :[this.start++],
      dateofBirth:[],
      hobbies:[],
      moveOut:[],
      previouslyApplied:[],
      preferredCity:[]
    })
  }

  pushSkills(){
    let i=0
    if(i==0 ){
      console.log(this.Memberdetails.value);
      
      this.details=this.Memberdetails.get("personalDetails")?.value
      console.log(this.details);
      this.Memberdetails.reset()
    this.policyDetails.push(this.Skills())
      
      
      this.firstMember=this.members[this.memberIndex]
    }
    if(i>0){
      this.memberIndex++
      console.log(this.memberIndex);
    }

  }

  getAddress(event:any,i:number){
    console.log(event.controls.address.value,i)
    
    let arr = this.Memberdetails.get("personalDetails") as FormArray

    // console.log("formarray index",arr.at(i).get("index")?.value);

    
    if(arr.at(i).get("index")?.value==i){
      
      this.address=true
      // let key:keyof this.pincodes
      this.api.getCity(event.controls.address.value).subscribe((res:any)=>{
        console.log(res)
        this.place= res[0].PostOffice[0].Name
      })
      
      
    }
    
  }
  deleteSkill(i:number){
    this.policyDetails.removeAt(i)
    console.log(this.policyDetails.get("index")?.value)
  }

}

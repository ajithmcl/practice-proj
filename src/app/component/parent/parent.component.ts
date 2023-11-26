import { Component, OnInit } from '@angular/core';
import  {FormArray,FormControl,Validators,FormGroup,FormBuilder} from '@angular/forms';
import {MatDialogModule,MatDialog} from '@angular/material/dialog';
import { DialogboxComponent } from '../../dialogcomponents/dialogbox/dialogbox.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DatashringService } from 'src/app/services/datashring.service';
import { Router } from '@angular/router';
import { Customer } from 'src/app/shared/customer';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  properties={
    class:"btn btn-primary",
    name:"babu",
    width:"20px",
    height:"50px",
    color:"red",
    // "font-size":"16px"
  }
  messagetochild:string="welcome"
  list=["babu","rao"]
  kycmessage:string=''
  registrationform!: FormGroup
  memberlist!:FormGroup
  previousdata:any
  Information:any
  childdata:any
  firstName='babu'
  childDetails:any
  UserName:string=''
  motivationalMsg=""
  customerDetails:any
  todayQoute:string="Give 100%"
  customers: Customer[] = [
 
    {customerNo: 1, name: 'Rahuld Dravid', address: 'Bangalore', city: 'Banglaore', state: 'Karnataka', country: 'India'},
    {customerNo: 2, name: 'Sachin Tendulkar', address: 'Mumbai', city: 'Mumbai', state: 'Maharastra', country: 'India'},
    {customerNo: 3, name: 'Saurrav Ganguly', address: 'Kolkata', city: 'Kolkata', state: 'West Bengal', country: 'India'},
    {customerNo: 4, name: 'Mahendra Singh Dhoni', address: 'Ranchi', city: 'Ranchi', state: 'Bihar', country: 'India'},
    {customerNo: 5, name: 'Virat Kohli', address: 'Delhi', city: 'Delhi', state: 'Delhi', country: 'India'},
 
  ]

  xyz!:number
  data:any=[]
  count:{[key:number]:number}={}

  selectedCustomer:Customer = new Customer();
  constructor( private fb:FormBuilder,
               private dialog:MatDialog,
               private datashare:DatashringService,
               private router:Router,) { }

  ngOnInit(): void {
    // this.recieve(event)
    // this.testData(this.UserName)
    // this.recieveMotivationmsg(this.motivationalMsg)
    this.registrationform=  this.fb.group({
      name:['',Validators.required],
      city:['',Validators.required],
      vaccinated:[false],
      dose1:[false],
      dose2:[false],
      
      contact:this.fb.array([])
    });
    this.memberlist=this.fb.group({
      self:[],
      spouse:[],
      kid1:[],
      kid2:[],
    })

  }


  sendData(){
    for(let i=0;i<this.xyz;i++){
      this.data.push(i)
    }
  }

  countData(event:any){
    if(this.count[event]){
      this.count[event]++
    }else{
      this.count[event]=1
    }
  }

  firstRecieve($event:any){
    this.childDetails=$event
  }

  testData(event:any){
    this.UserName=event
  }
  recieveMotivationmsg(event:any){
    this.motivationalMsg=event
  }

  recieve($event:any){
    console.log($event);
    this.childdata=$event
  }
  
  selectedlist(){
    
    this.datashare.senddata(this.memberlist.value)
    console.log(this.memberlist.get('self')?.value);
    
    this.router.navigate(["/memberlist"])

  }

  // addmember(){
  //   let mobile=new FormControl(null,Validators.required);
  //   (<FormArray>this.registrationform.get('contact')).push(mobile)
  // }
opendialog(){
  const dialogref=this.dialog.open(DialogboxComponent,{
    width:"50%",
    height:"60%",
    disableClose:true,
    data:this.Information
  })
  dialogref.afterClosed().subscribe(result=>{
    this.Information=result
    console.log(result)
  })
}   

get contact(){
  return  this.registrationform.get('contact') as FormArray
}

addcontrol(){
  this.contact.push(this.fb.control(''));
}
collectdata($event:any){
  this.kycmessage=$event
 }

 showDetails(customer:Customer) {
  this.selectedCustomer=Object.assign({},customer)
  console.log(this.selectedCustomer);
  this.customerDetails=customer
}

//  update(customer:Customer){}

update(customer:Customer) {
  console.log(customer)
  // var cust=this.customers.find(e => e.customerNo==customer.customerNo)
  // Object.assign(customer,cust)
  // console.log(customer,cust);
  this.customers.push(customer)
  
  console.log(this.customers);
  
  
  alert("Customer Saved")
  
}

}
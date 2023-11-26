import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';
import  {FormArray,FormControl,Validators,FormGroup,FormBuilder} from '@angular/forms';
import  {Customer} from '../../shared/customer'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit , OnChanges {
  memberdetailsform!: FormGroup
  itemrows!:FormArray[];
  selectedoption:string=''
  firstName="babu"
  @Input() todayMsg!:string
  @Input() Styles:any
  @Input() customer:Customer=new Customer();
  @Output() customerChange:EventEmitter<Customer>=new EventEmitter<Customer>()
  @Output() customerDetails:EventEmitter<any>=new EventEmitter()
  @Output() sendmessage:EventEmitter<string>=new EventEmitter<string>();
  @Output() kycstatus:EventEmitter<string>=new EventEmitter()
  @Output() message=new EventEmitter<string>()
  @Output() practiceText=new EventEmitter<string>()
  constructor(private fb:FormBuilder) { }
  // ngOnChanges(changes: SimpleChanges): void {
  //   throw new Error('Method not implemented.');
  // }
  @Input() details:any
  newUser:any=[]
  @Input() xyz:any
  userdetails:any
  kycmessage:string='success'
  userName="Babu Macherla"
  motivationalMsg="Don't Give Up"
  customerData:any
  customerNo=new FormControl()
  @Output() status= new EventEmitter<string>()
  ngOnInit(): void {
    
    this.memberdetailsform= this.fb.group({
      name: [''],
      city: [''],
      address:[''],
      state:[],
      country:[],

    })

    

    if(this.details){
    this.customerData=Object.values(this.details)

    }

    // this.memberdetailsform.get('name')?.setValue=this.customer.name
  }

  parseData(){
    this.newUser=this.details
  }

  send(){
    this.message.emit(this.userName);
  }
  practiceSend(){
    this.practiceText.emit(this.motivationalMsg)
  }

  first(){
    this.customerDetails.emit(this.firstName)
  }

  update(){
    this.customerChange.emit(this.memberdetailsform.value)
    console.log(this.memberdetailsform.value);
    console.log(this.customerNo.value);
    
    this.memberdetailsform.reset()
    
  }
//   selected(event:any){
//  this.selectedoption=event.target.value
//   }
  // get newperson(){
  //   return (<FormArray>this.memberdetailsform.get('member')) as FormArray
  // }
  addnewrow(){
    this.formarry.push(this.inititemrows());
  } 
  deleterow(index:number){
    this.formarry.removeAt(index)
  }
    get formarry(){
      return this.memberdetailsform.get('') as FormArray
    }
     get f(){
      return this.memberdetailsform.controls
     }
    inititemrows(){
      return this.fb.group({
        name:[''],
        city:[''],
        state:[''],
        pincode:[''],
      })
    }
  // addmember(){
  //   let person=new FormControl(null,Validators.required);
  //   (<FormArray>this.memberdetailsform.get('member')).push(person)
  // }
    // send(){
    //   this.kycstatus.emit(this.kycmessage)
    // }
    ngOnChanges(changes: SimpleChanges) {
      console.log(changes)
      // this.memberdetailsform.get("name")?.setValue(this.xyz.name)
      if(!changes.xyz.firstChange){
        this.memberdetailsform.get("name")?.setValue(changes.xyz.currentValue.name)
      }
    }
}

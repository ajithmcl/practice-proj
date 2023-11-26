import { Component,Inject, OnInit } from '@angular/core';
import { MatDialog,MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import  {FormArray,FormControl,Validators,FormGroup,FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css']
})
export class DialogboxComponent implements OnInit {
  vaccine:any
  list=["Self","Spouse","Son","Daughter"]
  details!:FormGroup
  person={
    name:"babu",
    age:26
  }
  previousdata:any
  TravelData=[]
  member!: FormArray;
  showFields:boolean=true
  constructor(private dialog:MatDialog,
              private fb:FormBuilder,
              private dialogRef:MatDialogRef<DialogboxComponent>,
              @Inject(MAT_DIALOG_DATA) public data:any) {
                this.details=this.fb.group({
                  member:this.fb.array([])
                })
               }

  ngOnInit(): void {
   
    for(let i=0;i<this.list.length;i++){
      // this.formdetails.push(this.fb.group({
      //   person:[this.list[i]],
      //   check:[],
      //   name:[],
      //   destination:[],
      //   noofDays:[],
      //   Boarding:[]
      // }))
      this.formdetails.push(this.pushSkills(i))
    }
   
    // this.formdetails.push(this.pushSkills())

    this.previousdata=this.data
    
    // console.log(this.previousdata);
    this.TravelData=Object.values(this.previousdata)

    console.log(this.TravelData);
    

    // for(let i=0;i<this.member.length;i++){
    //   this.details.get('member')?.get('check')?.setValue(this.previousdata)
    // }
    // this.data=JSON.stringify(this.data)
    // this.data=JSON.parse(this.data)
    //this.vaccine=this.data.vaccinated
    //console.log(this.vaccine, typeof this.vaccine);
    
  }

  checked(event:number){
    console.log(event, typeof event);
     const getArrayItems= this.details.get("member") as FormArray
     const requiredValues= getArrayItems.at(event).value
     console.log(requiredValues);
     console.log(requiredValues.check);
     console.log(requiredValues.destination);
     
     
    // if(requiredValues.check== true){
      
    //   this.showFields= false
    // }
    console.log(this.showFields);
    
  }

  // tripdetails(){
  //   return Object.values(this.previousdata)
  // }

  get Memberlist() {return this.details.controls}

  get formdetails(){return this.Memberlist.member as FormArray}

  close(){
    this.dialogRef.close(this.details.value)

  }

  pushSkills(event:number){
    return this.fb.group({
          person:[this.list[event]],
          check:[false],
          name:[],
          destination:[],
          noofDays:[],
          Boarding:[]
        })
  }
}

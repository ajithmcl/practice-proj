import { Component, OnInit } from '@angular/core';
import { DatashringService } from 'src/app/services/datashring.service';
import { ReactiveFormsModule,FormsModule, FormGroup,FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-memberlist',
  templateUrl: './memberlist.component.html',
  styleUrls: ['./memberlist.component.css']
})
export class MemberlistComponent implements OnInit {

  constructor(
    private datashare:DatashringService,
    private fb:FormBuilder
  ) { }
memberlist:any
selected:any
persons:any
member:any
memberform!:FormGroup
//selfform!:FormArray
//spouseform!:FormArray
  ngOnInit(): void {
    this.memberlist=this.datashare.getdata()
    console.log(this.memberlist);
    console.log(this.memberlist.key);
      this.persons= Object.keys(this.memberlist)
    console.log(this.persons);
this.memberform= this.fb.group({
selfform:this.fb.array([]),
spouseform:this.fb.array([])
})
    
  }


  changed(event:any){
    this.member= event.value
    console.log(this.member);
    
  }

selfdetails():FormGroup{
  return this.fb.group({
    age:'',
    pincode:'',
    suminsured:'',
    occupation:'',
  })
}
spouseddtails():FormGroup{
  return this.fb.group({
    apouseage:'',
    spousepincode:'',
    spouseoccupation:'',
    
  })
}

get skills() : FormArray {
  return this.memberform.get("selfform") as FormArray
}


}

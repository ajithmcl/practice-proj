import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { error } from 'console';
import { ApiService } from 'src/app/services/api.service';
import { DatashringService } from 'src/app/services/datashring.service';

@Component({
  selector: 'app-availableseats',
  templateUrl: './availableseats.component.html',
  styleUrls: ['./availableseats.component.css']
})
export class AvailableseatsComponent implements OnInit {
  postsForm!:FormGroup
  travelData:any
  apiData:any
  body:{}={title: '',
  body: '',
  userId: ''}
  resultData:any
  constructor(
    private fb:FormBuilder,
    private http:HttpClient,
    private data:DatashringService,
    private api:ApiService
  ) { }

  ngOnInit(): void {

    this.travelData=this.data.gettravelData()
    console.log(this.travelData);
    
    
    this.postsForm=this.fb.group({
      title:[""],
      body:[""],
      userId:[""]
    })
    // this.sendData()
  }


  PostData(){
    console.log(this.postsForm.value);
    const postData=this.postsForm.value
    this.http.post("https://selfmining-register-default-rtdb.asia-southeast1.firebasedatabase.app/post.json",postData).subscribe(
      (response:any)=>{
        console.log(response);
        
      }
    )
    
  }

  sendData(){
    let id=this.postsForm.get("userId")?.value
    console.log(id);
    
   this.api.sendData(id).subscribe(
    (res:any)=>{
      this.apiData=res
      console.log(this.apiData);
    },(error)=>{
      console.log(error);
      
    }
   )
  }

  postingData(){
     console.log(this.postsForm.value);
     this.body=this.postsForm.value
    this.api.postData(this.body).subscribe(
      (res:any)=>{
        this.resultData=res
        console.log(this.resultData);
        
      },(error)=>{
        console.log(error);
        
      }
    )
  }
}

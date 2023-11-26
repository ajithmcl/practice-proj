import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map,catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getproducts(){
    return this.http.get<any>("https://fakestoreapi.com/products/")
    .pipe(map((res:any)=>{
      return res
    }))
  }

  

  sendData(id:number):Observable<any>{
     return this.http.get<any>(`https://jsonplaceholder.typicode.com/posts/${id}`)
                                                .pipe(catchError(this.handleError))
  }

  handleError(error:any){
    return throwError("server error")
  }
  postData(body:any){
     
    return this.http.post('https://jsonplaceholder.typicode.com/posts',body)
                                                    .pipe(catchError(this.handleError))
  }

  getCity(pincode:number){
    return this.http.get(`https://api.postalpincode.in/pincode/${pincode}`)
  }

  uploadFile(image:any){
   return this.http.post("https://freeimage.host/api/1/upload?key=6d207e02198a847aa98d0a2a901485a5",image)
  }

  getManufactureDetails(){
    return this.http.get(`https://api.punkapi.com/v2/beers`)
  }

}

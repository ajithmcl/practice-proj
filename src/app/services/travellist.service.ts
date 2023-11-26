import { Injectable,OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TravellistService implements OnInit {
  // httpOptions!:any;

  constructor(
    private http:HttpClient
  ) {}

  ngOnInit(): void {
    
    
  }

  cityList(){
    // const headers = {
    //   'X-CSCAPI-KEY': 'key=AIzaSyBRavJvUHTLlzGY92fM1_ZgS4vGyHsLjho'
    // };

    // const httpOptions = {
    //   headers: headers
    // };
    return this.http.get("https://github.com/dr5hn/countries-states-cities-database")
  }
  
}

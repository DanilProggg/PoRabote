import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'main-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  constructor(private auth: UserService, private http:HttpClient){}
  status:boolean = false;

  ngOnInit() {
    const header = {
      headers: new HttpHeaders()
        .set('Authorization',  'Basic ' + btoa(this.auth.getEmail() + ':' + this.auth.getPassword()))
    }

    this.http.get('http://localhost:8080/api/user', header).subscribe(response => {
      if(response){
        this.status = true
        console.log("Header status")
      } else{
        this.status = false
      }
    });  
  }
  onPress(){
    console.log(this.auth.getEmail(), this.auth.getPassword())
  }
}
import { Component } from '@angular/core';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'main-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  constructor(private auth: UserService){}

  status:boolean = /*this.auth.authenticated*/true;

 
  
}

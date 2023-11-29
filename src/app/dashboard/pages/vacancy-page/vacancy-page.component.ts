import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-vacancy-page',
  templateUrl: './vacancy-page.component.html',
  styleUrls: ['./vacancy-page.component.css']
})
export class VacancyPageComponent {
  id:number;

  constructor(private activateRoute: ActivatedRoute){ 
    this.id = activateRoute.snapshot.params["id"];
  }
}

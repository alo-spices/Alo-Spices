import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-retailers',
  templateUrl: './retailers.component.html',
  styleUrls: ['./retailers.component.css']
})
export class RetailersComponent {
  constructor(private route: Router) { }
  startVisit() {
    this.route.navigate(["/shop-visit"]);
  }
}

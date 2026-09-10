import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-visit',
  templateUrl: './shop-visit.component.html',
  styleUrls: ['./shop-visit.component.css']
})
export class ShopVisitComponent {
  constructor(private route: Router) { }

  payment() {
    this.route.navigate(["/payment"]);
  }

  visitCompleted() {
    this.route.navigate(["/visit-completed"]);
  }
}

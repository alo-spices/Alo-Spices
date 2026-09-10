import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 ngAfterViewInit(): void {
  AOS.init({
    duration: 1000,
    once: false,
    offset: 100
  });

  AOS.refresh();
}


  title = 'OZO_Admin';
}

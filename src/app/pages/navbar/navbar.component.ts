import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
declare var bootstrap: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private route: Router) { }
  retailerOrderBooking() {
    this.route.navigate(["/employee-booking-orders"]);
  }
  @ViewChild('navbarCollapse')
  navbarCollapse!: ElementRef;
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  isEmployeeMenuOpen = false;

  toggleEmployeeMenu() {

    if (window.innerWidth < 992) {

      this.isEmployeeMenuOpen =
        !this.isEmployeeMenuOpen;
    }
  }

  closeNavbar() {

    this.isEmployeeMenuOpen = false;

    if (window.innerWidth < 992) {

      const navbar =
        this.navbarCollapse.nativeElement;

      const bsCollapse =
        bootstrap.Collapse.getOrCreateInstance(
          navbar
        );

      bsCollapse.hide();
    }
  }

}


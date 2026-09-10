import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';


import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { ViewCategoryComponent } from './View-dialog-Controllers/view-category/view-category.component';
import { ViewSubCategoryComponent } from './View-dialog-Controllers/view-sub-category/view-sub-category.component';
import { ViewSubSubCategoryComponent } from './View-dialog-Controllers/view-sub-sub-category/view-sub-sub-category.component';
import { ViewProductComponent } from './View-dialog-Controllers/view-product/view-product.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { BookingOrdersComponent } from './pages/booking-orders/booking-orders.component';
import { EmployeeBookingOrdersComponent } from './pages/employee-booking-orders/employee-booking-orders.component';
import { RetailersComponent } from './pages/retailers/retailers.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ProductsComponent } from './pages/products/products.component';
import { ShopVisitComponent } from './pages/shop-visit/shop-visit.component';
import { PaymentSectionComponent } from './pages/payment-section/payment-section.component';
import { VisitCompleteSucessComponent } from './pages/visit-complete-sucess/visit-complete-sucess.component';
import { TodayRoutesComponent } from './pages/today-routes/today-routes.component';
import { AttendenceComponent } from './pages/attendence/attendence.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DistributorComponent } from './pages/distributor/distributor.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewCategoryComponent,
    ViewSubCategoryComponent,
    ViewSubSubCategoryComponent,
    ViewProductComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    BookingOrdersComponent,
    EmployeeBookingOrdersComponent,
    RetailersComponent,
    CategoriesComponent,
    ProductsComponent,
    ShopVisitComponent,
    PaymentSectionComponent,
    VisitCompleteSucessComponent,
    TodayRoutesComponent,
    AttendenceComponent,
    ReportsComponent,
    AboutComponent,
    ContactComponent,
    DistributorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatIconModule,
    MatSortModule, MatSnackBarModule,
    MatDialogModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

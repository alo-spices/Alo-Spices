import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EmployeeBookingOrdersComponent } from './pages/employee-booking-orders/employee-booking-orders.component';
import { RetailersComponent } from './pages/retailers/retailers.component';
import { ShopVisitComponent } from './pages/shop-visit/shop-visit.component';
import { PaymentSectionComponent } from './pages/payment-section/payment-section.component';
import { VisitCompleteSucessComponent } from './pages/visit-complete-sucess/visit-complete-sucess.component';
import { TodayRoutesComponent } from './pages/today-routes/today-routes.component';
import { AttendenceComponent } from './pages/attendence/attendence.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DistributorComponent } from './pages/distributor/distributor.component';

const routes: Routes = [

  // First screen
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'employee-booking-orders', component: EmployeeBookingOrdersComponent },
  { path: 'retailers', component: RetailersComponent },
  { path: 'shop-visit', component: ShopVisitComponent },
  { path: 'payment', component: PaymentSectionComponent },
  { path: 'visit-completed', component: VisitCompleteSucessComponent },
  { path: 'today-routes', component: TodayRoutesComponent },
  { path: 'attendance', component: AttendenceComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
    { path: 'distributor', component: DistributorComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

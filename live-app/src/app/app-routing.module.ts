import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsComponent } from './appointments/appointments.component';
import { BooksComponent } from './books/books.component';
import { ActivitiesComponent } from './activities/activities.component';
import { DonationsComponent } from './donations/donations.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: "" , component: HomeComponent},
  {path: "appointments", component: AppointmentsComponent},
  {path: "books", component: BooksComponent},
  {path: "activities", component: ActivitiesComponent},
  {path: "donations", component: DonationsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

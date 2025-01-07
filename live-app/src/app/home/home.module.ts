import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AppointmentsComponent } from '../appointments/appointments.component';
import { BooksComponent } from '../books/books.component';
import { ActivitiesComponent } from '../activities/activities.component';
import { DonationsComponent } from '../donations/donations.component';



@NgModule({
  declarations: [
    HomeComponent,
    AppointmentsComponent,
    BooksComponent,
    ActivitiesComponent,
    DonationsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }

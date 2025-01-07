import { Component } from '@angular/core';
import { Activities } from '../models/activities';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent {

  newActivityTitle: string = '';
  newActivityGoal: string = '';
  newActivityDescription: string = '';
  newActivityDate: Date = new Date();

  activities: Activities[] = []

  addActivity() {
    const newActivity: Activities = {
      activity: this.newActivityTitle,
      goal: this.newActivityGoal,
      description: this.newActivityDescription,
      date: this.newActivityDate
    }

    this.activities.push(newActivity);
  }

}





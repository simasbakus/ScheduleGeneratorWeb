import { Component } from '@angular/core';

@Component({
  selector: 'schedule-app',
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
    <!-- <employee-list></employee-list> -->
    <!-- <login></login> -->
  `,
})
export class ScheduleAppComponent {
  title = 'ScheduleGeneratorWeb';
}

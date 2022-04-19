import { Component, Input } from "@angular/core";
import { IScheduleDay } from "../models/schedule.model";

@Component({
    selector: 'schedule-day',
    template: `
        <div class="day-cell">
          <p>{{day?.day}}</p>
          <input type="text" [(ngModel)]="day.schedule">
        <div>
    `,
    styleUrls: ['./schedule-day.component.css']
  })
export class ScheduleDayComponent {
  @Input() day!:IScheduleDay
}
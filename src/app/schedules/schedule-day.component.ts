import { Component, Input } from "@angular/core";
import { IScheduleDay } from "../models/schedule.model";

@Component({
    selector: 'schedule-day',
    template: `
        <div class="day-cell">
          <!-- <p>{{day?.day}}</p> -->
          <input type="text" [value]="day?.schedule">
        <div>
    `,
    styles: [`
      .day-cell{
        height: 4.5rem;
        /* border: red solid 1px; */
      }
      .day-cell input{
        text-align: center;
        font-size: 1rem;
        background-color: lightgray;
        border: none;
        width: 100%;
        height: 100%;
        cursor: pointer;
      }
      .day-cell input:focus{
        outline: none;
        background-color: darkgray;
      }
      .day-cell input:hover{
        background-color: darkgray;
      }
    `]
  })
export class ScheduleDayComponent {
  @Input() day:IScheduleDay | undefined
}
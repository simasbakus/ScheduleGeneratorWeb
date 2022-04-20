import { Component } from '@angular/core';
import { SchedulesService } from './services/schedules.service';

@Component({
    template: `
      <div>
        <div class="generate-schedule">
          <button>Generate new Schedule</button>
        </div>
        <div class="schedules-list">
          <h2>
            Generated Schedules
          </h2>
          <div *ngFor="let month of monthsSchedules" class="schedules-list-element" [routerLink]="['/schedule', month]">
            <h3>Schedule for {{month}}</h3>
          </div>
        </div>
      </div>
    `,
    styles: [`
      .generate-schedule { 
        display: block;
        text-align: center; 
        padding: 10px;
      }
      .generate-schedule button {
        font-size: 16px;
        padding: 5px
      } 
      .schedules-list {
        margin-top: 20px;
      }
      .schedules-list-element { 
        display: flex; 
        border-bottom: black solid 2px;
        margin: 5px 0; 
        cursor: pointer;
        width: 40%;
      }
      .schedules-list-element h3 { 
        padding: 5px; 
        margin: 0 
      }
      .schedules-list-element:hover { 
        background-color: #bbb 
      }
    `]
  })
export class SchedulesListComponent {
  monthsSchedules:any = []
  
  constructor(private schedulesServices: SchedulesService) { }
  
  ngOnInit() {
    this.schedulesServices.RetrieveAllSchedules().subscribe(data => {
      this.monthsSchedules = [... new Set(data.map(s => s.month))];
    });
  }
}
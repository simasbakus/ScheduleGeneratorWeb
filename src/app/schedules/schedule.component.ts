import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEmployee } from '../models/employee.model';
import { ISchedule } from '../models/schedule.model';
import { SchedulesService } from './services/schedules.service';

@Component({
    templateUrl: './schedule.component.html',
    styleUrls: ['./schedule.component.css']
  })
export class ScheduleComponent {
  selectedEmployee!: IEmployee
  schedule: ISchedule | undefined;
  startColumn:number = 0;

  constructor(private schedulesService:SchedulesService, public route:ActivatedRoute) { }

  loadSchedule(employeeId: number) {
    this.schedulesService.RetrieveEmployeeSchedule(employeeId, this.route.snapshot.params['month']).subscribe(data => {
      this.schedule = data;
      this.startColumn = GetFirstDayColumnNr(this.schedule);
    });
  }
}

function GetFirstDayColumnNr(schedule:ISchedule | undefined): number {
  let firstDayWeekday = schedule?.days.find(s => s.day === 1)?.weekday;

  if(firstDayWeekday === undefined)
    return 0;
  else
    return weekdayToNumber[firstDayWeekday];
}

const weekdayToNumber: { [name: string]: number } = {
  'Monday': 1,
  'Tuesday': 2,
  'Wednesday': 3,
  'Thursday': 4,
  'Friday': 5,
  'Saturday': 6,
  'Sunday': 7
}
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from '../employees/services/employees.service';
import { ISchedule } from '../models/schedule.model';
import { SchedulesService } from './services/schedules.service';

@Component({
    templateUrl: './schedule.component.html',
    styleUrls: ['./schedule.component.css']
  })
export class ScheduleComponent {
  schedule: ISchedule | undefined;
  startColumn:number = 0;

  constructor(private schedulesService:SchedulesService, private route:ActivatedRoute, private employeesService:EmployeesService) { }

  ngOnInit() {
    this.schedule = this.schedulesService.RetrieveEmployeeSchedule(+this.route.snapshot.params['employeeId'], this.route.snapshot.params['month']);
    
    this.startColumn = GetFirstDayColumnNr(this.schedule);
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
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
  Sunday: 7
}
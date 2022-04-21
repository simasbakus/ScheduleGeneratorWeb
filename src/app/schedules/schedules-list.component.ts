import { Component } from '@angular/core';
import { SchedulesService } from './services/schedules.service';

@Component({
    templateUrl: './schedules-list.component.html',
    styleUrls: ['./schedules-list.component.css']
  })
export class SchedulesListComponent {
  monthsSchedules:string[] = []
  
  constructor(private schedulesServices: SchedulesService) { }
  
  ngOnInit() {
    this.schedulesServices.RetrieveAllSchedules().subscribe(data => {
      this.monthsSchedules = [... new Set(data.map(s => s.month).sort(sortByDate))];
    });
  }

  deleteSchedule(month: string){
    this.monthsSchedules = this.monthsSchedules.filter((s: string) => s !== month);

    this.schedulesServices.DeleteSchedule(month).subscribe();
  }
}

function sortByDate(firstEl:string, secondEl:string) {
  let firstElArr = firstEl.split("-");
  let secondElArr = secondEl.split("-");

  let firstElDate = new Date(+firstElArr[0], +firstElArr[1] - 1)
  let secondElDate = new Date(+secondElArr[0], +secondElArr[1] - 1 )
  
  return +secondElDate - +firstElDate
}
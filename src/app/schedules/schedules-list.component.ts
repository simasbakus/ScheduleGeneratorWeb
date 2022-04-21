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
      this.monthsSchedules = [... new Set(data.map(s => s.month))];
    });
  }

  deleteSchedule(month: string){
    this.monthsSchedules = this.monthsSchedules.filter(s => s !== month);

    this.schedulesServices.DeleteSchedule(month).subscribe();
  }
}
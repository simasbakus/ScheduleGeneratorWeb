import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core"
import { Observable } from "rxjs";
import { ISchedule } from "src/app/models/schedule.model"

@Injectable()
export class SchedulesService {

  constructor(private http: HttpClient) {}

  RetrieveEmployeeSchedule(employeeid:number, month:string): Observable<ISchedule> {
    return this.http.get<ISchedule>(`https://localhost:7075/api/Schedules/${employeeid}/${month}`);
  }

  RetrieveAllSchedules(): Observable<ISchedule[]> {
    return this.http.get<ISchedule[]>("https://localhost:7075/api/Schedules");
  }
}
import { Injectable } from "@angular/core"
import { ISchedule } from "src/app/models/schedule.model"

@Injectable()
export class SchedulesService {

    RetrieveEmployeeSchedule(employeeid:number, month:string): ISchedule | undefined {
        return schedules.find(s => s.employeeId === employeeid && s.month === month);
    }

    RetrieveAllSchedules(): ISchedule[] {
        return schedules;
    }
}

const schedules: ISchedule[] = [
    {
        id: 4,
        employeeId: 1,
        month: "2022-01",
        days: [
            {
            id: 1,
            employeeMonthId: 4,
            day: 1,
            schedule: "S",
            weekday: "Saturday"
            },
            {
            id: 2,
            employeeMonthId: 4,
            day: 2,
            schedule: "P",
            weekday: "Sunday"
            },
            {
            id: 3,
            employeeMonthId: 4,
            day: 3,
            schedule: "8.0 12.0 13.0 17.0",
            weekday: "Monday"
            },
            {
            id: 4,
            employeeMonthId: 4,
            day: 4,
            schedule: "8.0 12.0 13.0 17.0",
            weekday: "Tuesday"
            },
            {
            id: 5,
            employeeMonthId: 4,
            day: 5,
            schedule: "8.0 12.0 13.0 17.0",
            weekday: "Wednesday"
            },
            {
            id: 6,
            employeeMonthId: 4,
            day: 6,
            schedule: "8.0 12.0 13.0 17.0",
            weekday: "Thursday"
            },
            {
            id: 7,
            employeeMonthId: 4,
            day: 7,
            schedule: "8.0 12.0 13.0 17.0",
            weekday: "Friday"
            },
            {
            id: 8,
            employeeMonthId: 4,
            day: 8,
            schedule: "P",
            weekday: "Saturday"
            },
            {
            id: 9,
            employeeMonthId: 4,
            day: 9,
            schedule: "P",
            weekday: "Sunday"
            },
            {
            id: 10,
            employeeMonthId: 4,
            day: 10,
            schedule: "8.0 12.0 13.0 17.0",
            weekday: "Monday"
            },
            {
            id: 11,
            employeeMonthId: 4,
            day: 11,
            schedule: "8.0 12.0 13.0 17.0",
            weekday: "Tuesday"
            },
            {
            id: 12,
            employeeMonthId: 4,
            day: 12,
            schedule: "8.0 12.0 13.0 17.0",
            weekday: "Wednesday"
            },
            {
            id: 13,
            employeeMonthId: 4,
            day: 13,
            schedule: "8.0 12.0 13.0 17.0",
            weekday: "Thursday"
            },
            {
            id: 14,
            employeeMonthId: 4,
            day: 14,
            schedule: "8.0 12.0 13.0 17.0",
            weekday: "Friday"
            },
            {
            id: 15,
            employeeMonthId: 4,
            day: 15,
            schedule: "P",
            weekday: "Saturday"
            },
            {
            id: 16,
            employeeMonthId: 4,
            day: 16,
            schedule: "P",
            weekday: "Sunday"
            },
            {
            id: 17,
            employeeMonthId: 4,
            day: 17,
            schedule: "8.0 12.0 13.0 17.0",
            weekday: "Monday"
            },
            {
            id: 18,
            employeeMonthId: 4,
            day: 18,
            schedule: "8.0 12.0 13.0 17.0",
            weekday: "Tuesday"
            },
            {
            id: 19,
            employeeMonthId: 4,
            day: 19,
            schedule: "8.0 12.0 13.0 17.0",
            weekday: "Wednesday"
            },
            {
            id: 20,
            employeeMonthId: 4,
            day: 20,
            schedule: "8.0 12.0 13.0 17.0",
            weekday: "Thursday"
            },
            {
            id: 21,
            employeeMonthId: 4,
            day: 21,
            schedule: "8.0 12.0 13.0 17.0",
            weekday: "Friday"
            },
            {
            id: 22,
            employeeMonthId: 4,
            day: 22,
            schedule: "P",
            weekday: "Saturday"
            },
            {
            id: 23,
            employeeMonthId: 4,
            day: 23,
            schedule: "P",
            weekday: "Sunday"
            },
            {
            id: 24,
            employeeMonthId: 4,
            day: 24,
            schedule: "8.0 12.0 13.0 17.0",
            weekday: "Monday"
            },
            {
            id: 25,
            employeeMonthId: 4,
            day: 25,
            schedule: "8.0 12.0 13.0 17.0",
            weekday: "Tuesday"
            },
            {
            id: 26,
            employeeMonthId: 4,
            day: 26,
            schedule: "8.0 12.0 13.0 17.0",
            weekday: "Wednesday"
            },
            {
            id: 27,
            employeeMonthId: 4,
            day: 27,
            schedule: "8.0 12.0 13.0 17.0",
            weekday: "Thursday"
            },
            {
            id: 28,
            employeeMonthId: 4,
            day: 28,
            schedule: "8.0 12.0 13.0 17.0",
            weekday: "Friday"
            },
            {
            id: 29,
            employeeMonthId: 4,
            day: 29,
            schedule: "P",
            weekday: "Saturday"
            },
            {
            id: 30,
            employeeMonthId: 4,
            day: 30,
            schedule: "P",
            weekday: "Sunday"
            },
            {
            id: 31,
            employeeMonthId: 4,
            day: 31,
            schedule: "8.0 12.0 13.0 17.0",
            weekday: "Monday"
            }
        ]
    },
    {
        id: 9,
        employeeId: 2,
        month: "2022-01",
        days: [
          {
            id: 151,
            employeeMonthId: 9,
            day: 1,
            schedule: "10.0 14.0 15.0 18.0",
            weekday: "Wednesday"
          },
          {
            id: 152,
            employeeMonthId: 9,
            day: 2,
            schedule: "P",
            weekday: "Thursday"
          },
          {
            id: 153,
            employeeMonthId: 9,
            day: 3,
            schedule: "P",
            weekday: "Friday"
          },
          {
            id: 154,
            employeeMonthId: 9,
            day: 4,
            schedule: "P",
            weekday: "Saturday"
          },
          {
            id: 155,
            employeeMonthId: 9,
            day: 5,
            schedule: "P",
            weekday: "Sunday"
          },
          {
            id: 156,
            employeeMonthId: 9,
            day: 6,
            schedule: "P",
            weekday: "Monday"
          },
          {
            id: 157,
            employeeMonthId: 9,
            day: 7,
            schedule: "P",
            weekday: "Tuesday"
          },
          {
            id: 158,
            employeeMonthId: 9,
            day: 8,
            schedule: "10.0 14.0 15.0 18.0",
            weekday: "Wednesday"
          },
          {
            id: 159,
            employeeMonthId: 9,
            day: 9,
            schedule: "P",
            weekday: "Thursday"
          },
          {
            id: 160,
            employeeMonthId: 9,
            day: 10,
            schedule: "P",
            weekday: "Friday"
          },
          {
            id: 161,
            employeeMonthId: 9,
            day: 11,
            schedule: "P",
            weekday: "Saturday"
          },
          {
            id: 162,
            employeeMonthId: 9,
            day: 12,
            schedule: "P",
            weekday: "Sunday"
          },
          {
            id: 163,
            employeeMonthId: 9,
            day: 13,
            schedule: "P",
            weekday: "Monday"
          },
          {
            id: 164,
            employeeMonthId: 9,
            day: 14,
            schedule: "P",
            weekday: "Tuesday"
          },
          {
            id: 165,
            employeeMonthId: 9,
            day: 15,
            schedule: "10.0 14.0 15.0 18.0",
            weekday: "Wednesday"
          },
          {
            id: 166,
            employeeMonthId: 9,
            day: 16,
            schedule: "P",
            weekday: "Thursday"
          },
          {
            id: 167,
            employeeMonthId: 9,
            day: 17,
            schedule: "P",
            weekday: "Friday"
          },
          {
            id: 168,
            employeeMonthId: 9,
            day: 18,
            schedule: "P",
            weekday: "Saturday"
          },
          {
            id: 169,
            employeeMonthId: 9,
            day: 19,
            schedule: "P",
            weekday: "Sunday"
          },
          {
            id: 170,
            employeeMonthId: 9,
            day: 20,
            schedule: "P",
            weekday: "Monday"
          },
          {
            id: 171,
            employeeMonthId: 9,
            day: 21,
            schedule: "P",
            weekday: "Tuesday"
          },
          {
            id: 172,
            employeeMonthId: 9,
            day: 22,
            schedule: "10.0 14.0 15.0 18.0",
            weekday: "Wednesday"
          },
          {
            id: 173,
            employeeMonthId: 9,
            day: 23,
            schedule: "P",
            weekday: "Thursday"
          },
          {
            id: 174,
            employeeMonthId: 9,
            day: 24,
            schedule: "S",
            weekday: "Friday"
          },
          {
            id: 175,
            employeeMonthId: 9,
            day: 25,
            schedule: "P",
            weekday: "Saturday"
          },
          {
            id: 176,
            employeeMonthId: 9,
            day: 26,
            schedule: "P",
            weekday: "Sunday"
          },
          {
            id: 177,
            employeeMonthId: 9,
            day: 27,
            schedule: "P",
            weekday: "Monday"
          },
          {
            id: 178,
            employeeMonthId: 9,
            day: 28,
            schedule: "P",
            weekday: "Tuesday"
          },
          {
            id: 179,
            employeeMonthId: 9,
            day: 29,
            schedule: "10.0 14.0 15.0 18.0",
            weekday: "Wednesday"
          },
          {
            id: 180,
            employeeMonthId: 9,
            day: 30,
            schedule: "P",
            weekday: "Thursday"
          }
        ]
      }
]
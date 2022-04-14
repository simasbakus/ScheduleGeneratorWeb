export interface ISchedule {
    id: number;
    employeeId: number;
    month: string;
    days: IScheduleDay[]
}

export interface IScheduleDay {
    id: number;
    employeeMonthId: number;
    day: number;
    schedule: string;
    weekday: string;
}
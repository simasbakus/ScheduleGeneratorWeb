export interface IEmployee {
    id: number;
    name: string;
    lastName: string;
    position: string;
    defaultWeek: IEmployeeDefaultWeek;
}

export interface IEmployeeDefaultWeek {
    id: number;
    employeeId: number;
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
}
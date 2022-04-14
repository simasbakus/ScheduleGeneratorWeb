import { Injectable } from "@angular/core"
import { IEmployee } from "src/app/models/employee.model"

@Injectable()
export class EmployeesService {

    RetrieveAllEmployees():IEmployee[] {
        return employees
    }

    RetrieveEmployee(id:number):IEmployee | undefined{
        let employee = employees.find(e => e.id === id);
        
        return employee;
    }
}

const employees: IEmployee[] = [
  {
    id: 1,
    name: "Simas",
    lastName: "Bakus",
    position: "Developer",
    defaultWeek: {
      id: 1,
      employeeId: 1,
      monday: "8.0 12.0 13.0 17.0",
      tuesday: "8.0 12.0 13.0 17.0",
      wednesday: "8.0 12.0 13.0 17.0",
      thursday: "8.0 12.0 13.0 17.0",
      friday: "8.0 12.0 13.0 17.0",
      saturday: "P",
      sunday: "P"
    }
  },
  {
    id: 2,
    name: "Simas2",
    lastName: "Bakus2",
    position: "Developer2",
    defaultWeek: {
      id: 2,
      employeeId: 2,
      monday: "P",
      tuesday: "8.0 12.0 13.0 17.0",
      wednesday: "8.0 12.0 13.0 17.0",
      thursday: "8.0 12.0 13.0 17.0",
      friday: "P",
      saturday: "P",
      sunday: "P"
    }
  }
]
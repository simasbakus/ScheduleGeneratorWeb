import { Injectable } from "@angular/core"

@Injectable()
export class EmployeesService {

    RetrieveAllEmployees() {
        return employees
    }

    RetrieveEmployee(id:number) {
        return employees.find(e => e.id === id)
    }
}

const employees = [
    {
      id: 1,
      Name: 'Simas',
      LastName: 'Bakus',
      Position: 'Dev'
    },
    {
      id: 2,
      Name: 'Simas2',
      LastName: 'Bakus2',
      Position: 'Dev'
    },
]
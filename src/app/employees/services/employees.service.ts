import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core"
import { Observable } from "rxjs";
import { IEmployee } from "src/app/models/employee.model"

@Injectable()
export class EmployeesService {

  constructor(private http: HttpClient) {}

  RetrieveAllEmployees():Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>("https://localhost:7075/api/Employees");
  }

  RetrieveEmployee(id:number):Observable<IEmployee>{
    return this.http.get<IEmployee>(`https://localhost:7075/api/Employees/${id}`);
  }
}
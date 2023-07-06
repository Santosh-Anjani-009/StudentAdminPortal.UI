import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/api-models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseApiUrl = "https://localhost:7240";
  constructor(private httpClnt: HttpClient) { }

  getStudents(): Observable<Student[]>{
    return this.httpClnt.get<Student[]>(this.baseApiUrl+"/students")
  }

  getStudent(studentId: string): Observable<Student>{
    return this.httpClnt.get<Student>(this.baseApiUrl+"/students/"+studentId)
  }
}

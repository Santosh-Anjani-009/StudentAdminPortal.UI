import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/api-models/student.model';
import { UpdateStudentRequest } from '../models/api-models/update-student-request.model';

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

  updateStudent(studentId: string, stuRequest: Student): Observable<Student>{
    const updateStuRequest : UpdateStudentRequest = {
      firstName: stuRequest.firstName,
      lastName: stuRequest.lastName,
      email: stuRequest.email,
      dateOfBirth: stuRequest.dateOfBirth,
      mobile: stuRequest.mobile,
      genderId: stuRequest.genderId,
      physicalAddress: stuRequest.address.physicalAddress,
      postalAddress: stuRequest.address.postalAddress
    }

    return this.httpClnt.put<Student>(this.baseApiUrl+"/students/"+studentId, updateStuRequest)
  }

  deleteStudent(studentId: string): Observable<Student>{ 
    return this.httpClnt.delete<Student>(this.baseApiUrl+"/students/"+studentId)
  }
}

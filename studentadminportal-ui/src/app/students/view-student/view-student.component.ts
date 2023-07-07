import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/api-models/student.model';
import { GenderService } from 'src/app/Services/gender.service';
import { Gender } from 'src/app/models/ui-models/gender.uimodel';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {
  
  constructor(private readonly stuService: StudentService, 
              private readonly route: ActivatedRoute, 
              private genderService: GenderService,
              private snackBar: MatSnackBar,
              private router: Router ){}
  
  studentId: string | null | undefined;
  student: Student = {
    id:"", firstName :"", lastName:"", dateOfBirth:"", email:"", mobile:0, genderId:"", profileImageUrl:"",
    gender:{id:"",description:""}, address:{id:"", physicalAddress:"", postalAddress:""}
  }
  genders: Gender[] = [];

  ngOnInit(): void{
    this.route.paramMap.subscribe((params)=> {
      this.studentId = params.get('id');
      if(this.studentId != null)
      {
        this.stuService.getStudent(this.studentId)
        .subscribe(
          (successResponse)=>{
            this.student = successResponse;
            console.log(successResponse);
          }
        );

        this.genderService.getGenders().subscribe(
          (successResponse)=>{
            this.genders = successResponse;
          }
        );
      }

    });
     
  }

  OnSave(): void{
    this.stuService.updateStudent(this.student.id, this.student).subscribe(
      
      (successResponse)=> {
        // show notification
        this.snackBar.open("Student Updated Successfully.", undefined, {
          duration: 2000
        })
      },

      (errorResponse)=>{
        console.log("Error while updating record");
      }

    )
  }

  OnDelete(): void{
    this.stuService.deleteStudent(this.student.id).subscribe(
      (successResponse) => {
        this.snackBar.open("Student Deleted Successfully.",undefined, {
          duration: 2000
        });

      setTimeout(() => {
        this.router.navigateByUrl("/");
      }, 2000);
      }
    )
  }
}

import { Component } from '@angular/core';
import { StudentsService } from '../services/students.service';
import { Route, Router } from '@angular/router';
import { Signup } from '../data-types';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private student:StudentsService, private router:Router){}
  signUp(data:Signup):void{
    
    this.student.studentSignup(data).subscribe((result)=>{
      if(result)
      {
        this.router.navigate(['home'])
      }
    }); 

  }

}

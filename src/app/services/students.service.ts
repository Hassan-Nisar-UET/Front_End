import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Signup } from '../data-types';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http:HttpClient) { }
  studentSignup(data:Signup){
    return this.http.post('http://localhost:3000/students',data)
  }
}

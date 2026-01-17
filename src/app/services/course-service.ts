import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Course } from '../common/course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {

  private baseUrl = "http://localhost:8080/courses"

  httpClient = inject(HttpClient)

  getCourseList(): Observable<Course[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(res => res.content)
    )
  }  
  
}

interface GetResponse {
  content: Course[];
  page: {
    size: number,
    number: number,
    totalElements: number,
    totalPages: number
  }
}

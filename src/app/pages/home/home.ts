import { Component, inject, OnInit } from '@angular/core';
import { CourseHomeTile } from "../../components/course-home-tile/course-home-tile";
import { RouterLink } from "@angular/router";
import { CourseService } from '../../services/course-service';
import { Course } from '../../common/course';

@Component({
  selector: 'app-home',
  imports: [CourseHomeTile, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  courseService = inject(CourseService);
  courses!: Course[]

  ngOnInit(): void {
    this.getCourses()
    
  }

  getCourses() {
    this.courseService.getCourseList().subscribe(
      data => {
        this.courses = data.slice(0, 2);
      }
    )
  }

}

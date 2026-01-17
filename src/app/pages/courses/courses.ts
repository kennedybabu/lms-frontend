import { Component, inject, OnInit } from '@angular/core';
import { CourseHomeTile } from "../../components/course-home-tile/course-home-tile";
import { CourseService } from '../../services/course-service';
import { Course } from '../../common/course';

@Component({
  selector: 'app-courses',
  imports: [CourseHomeTile],
  templateUrl: './courses.html',
  styleUrl: './courses.scss',
})
export class Courses implements OnInit {

  courseSerice = inject(CourseService);
  courses!: Course[];

  ngOnInit(): void {
    this.listCourses();
  }

  listCourses() {
    this.courseSerice.getCourseList().subscribe(
      data => {
        this.courses = data;

        console.log(this.courses)

      }
    )
  }
  

}

import { Component, inject, OnInit } from '@angular/core';
import { CourseHomeTile } from "../../components/course-home-tile/course-home-tile";
import { CourseService } from '../../services/course-service';
import { Course } from '../../common/course';
import { error } from 'console';

@Component({
  selector: 'app-courses',
  imports: [CourseHomeTile],
  templateUrl: './courses.html',
  styleUrl: './courses.scss',
})
export class Courses implements OnInit {

  courseService = inject(CourseService);
  courses!: Course[];

  ngOnInit(): void {
    this.listCourses();
  }

  listCourses() {
    this.courseService.getCourseList().subscribe(
      data => {
        this.courses = data;
        console.log(this.courses)
      }
    )
  }


  onCourseDelete(courseId: string) {
    this.courseService.deleteCourse(courseId).subscribe({
      next: () => {
        this.listCourses()
      },
      error: (error) => {
        console.log('Error deleting the course')
      }
    })
  }

}

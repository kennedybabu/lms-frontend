import { Component, EventEmitter, inject, Input, input, Output } from '@angular/core';
import { Course } from '../../common/course';
import { CourseService } from '../../services/course-service';

@Component({
  selector: 'app-course-home-tile',
  imports: [],
  templateUrl: './course-home-tile.html',
  styleUrl: './course-home-tile.scss',
})
export class CourseHomeTile {

  course = input.required<Course>()
  courseService = inject(CourseService);
  @Input() courseObject!: Course
  @Output() courseDeleted = new EventEmitter<string>();


  deleteCourse(course: Course) {
    this.courseDeleted.emit(course.id);
  }

}

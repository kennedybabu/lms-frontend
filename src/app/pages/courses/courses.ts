import { Component } from '@angular/core';
import { CourseHomeTile } from "../../components/course-home-tile/course-home-tile";

@Component({
  selector: 'app-courses',
  imports: [CourseHomeTile],
  templateUrl: './courses.html',
  styleUrl: './courses.scss',
})
export class Courses {

}

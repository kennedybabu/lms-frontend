import { Component } from '@angular/core';
import { CourseHomeTile } from "../../components/course-home-tile/course-home-tile";

@Component({
  selector: 'app-home',
  imports: [CourseHomeTile],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}

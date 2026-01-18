import { Component } from '@angular/core';
import { CourseHomeTile } from "../../components/course-home-tile/course-home-tile";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [CourseHomeTile, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}

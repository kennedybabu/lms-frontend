import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Courses } from './pages/courses/courses';

export const routes: Routes = [
    {
        path: '', component: Home
    },
    {
        path:'courses', component: Courses
    }
];

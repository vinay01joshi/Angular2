import { AutoGrowDirective } from './auto-grow.directive';
import { CourseService } from './course.service';
import { Component } from 'angular2/core';

@Component({
    selector: 'courses', 
    template : `
        <div *ngIf="courses.length >0">
           <h2>Courses</h2>
           {{title}}
           <input type="text" autoGrow />
           <ul>
               <li *ngFor="#course of courses , #i = index">
                   {{ i + 1}} - {{course}}                  
               </li>
           </ul>
        </div>
        <div *ngIf="courses.length ==0">
            you donot have any cources yet.
        </div>
        <div [hidden]="courses.length ==0">
            this is hidden div rendered on the dom
        </div>
        `,
    providers:[CourseService],
    directives :[AutoGrowDirective]
})
export class CoursesComponent {
    title = "The title of courses page";
    courses = [];    
    constructor(courseService : CourseService){
        this.courses = courseService.getCourses();
    }
}
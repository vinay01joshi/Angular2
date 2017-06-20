import { AuthorsCoponent } from './authors.component';
import { CoursesComponent } from './courses.component';
import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
                <h1>My First Angular 2 App</h1>
                <courses></courses>
                <authors><authors>
              `,
    directives:[CoursesComponent,AuthorsCoponent]
})
export class AppComponent { }
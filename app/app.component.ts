import { BindingComponent } from './bindings.component';
import { AuthorsCoponent } from './authors.component';
import { CoursesComponent } from './courses.component';
import {Component} from 'angular2/core';
import { TweetComponent } from "./tweet.component";
import { TabComponent } from "./tab.component";

@Component({
    selector: 'my-app',
    template: `
                <h1>My First Angular 2 App</h1>
                <tabview></tabview>
              `,
    directives:[CoursesComponent,AuthorsCoponent,BindingComponent,TweetComponent,TabComponent]
})
export class AppComponent { }
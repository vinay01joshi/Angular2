import { BindingComponent } from './bindings.component';
import { AuthorsCoponent } from './authors.component';
import { CoursesComponent } from './courses.component';
import {Component} from 'angular2/core';
import { TweetComponent } from "./tweet.component";
import { TabComponent } from "./tab.component";
import { PipeComponent } from "./pipe.component";
import { TaskComponent } from "./task.component";
import { BootstrapPanel } from "./bootstrap.panel.component";

@Component({
    selector: 'my-app',
    template: `
    <div class="container">
        <h1>My First Angular 2 App</h1>
        <bs-panel>
            <div class="heading">Heading</div>
            <div class="body">This is the body!</div>            
        </bs-panel>
        <task></task>     
    <div>                           
    `,
    directives:[CoursesComponent
                ,AuthorsCoponent
                ,BindingComponent
                ,TweetComponent
                ,TabComponent
                ,PipeComponent
                ,TaskComponent
                ,BootstrapPanel]
})
export class AppComponent { }
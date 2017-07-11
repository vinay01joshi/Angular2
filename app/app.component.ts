import { BindingComponent } from './bindings.component';
import { AuthorsCoponent } from './authors.component';
import { CoursesComponent } from './courses.component';
import {Component} from 'angular2/core';
import { TweetComponent } from "./tweet.component";
import { TabComponent } from "./tab.component";
import { PipeComponent } from "./pipe.component";
import { TaskComponent } from "./task.component";
import { BootstrapPanel } from "./bootstrap.panel.component";
import { ZippyComponent } from "./zippy.component";
import { ContactFormComponent } from "./contact-form.component";

@Component({
    selector: 'my-app',
    template: `
    <div class="container">
       <contact-form></contact-form>
    <div>                             
    `,
    directives:[CoursesComponent
                ,AuthorsCoponent
                ,BindingComponent
                ,TweetComponent
                ,TabComponent
                ,PipeComponent
                ,TaskComponent
                ,BootstrapPanel
                ,ZippyComponent
                ,ContactFormComponent]
})
export class AppComponent { }
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

@Component({
    selector: 'my-app',
    template: `
    <div class="container">
       <zippy title="Who can see my stuff?">
            content of who can see my stuff
       </zippy>
       <zippy title="Who can Contact me?">
            content of who can contact me
       </zippy>
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
                ,ZippyComponent]
})
export class AppComponent { }
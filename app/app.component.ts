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
import { SubscriptionComponent } from "./subscription-form.component";
import { SignupComponent } from "./signup.component";

@Component({
    selector: 'my-app',
    template: `
    <div class="container">
       <sign-up></sign-up>
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
                ,ContactFormComponent
                ,SubscriptionComponent
                ,SignupComponent]
})
export class AppComponent { }
import {Component} from 'angular2/core';
import { RouteConfig ,RouterOutlet} from 'angular2/router';

import { ContactComponent } from './contact.component';
import { AlbumComponent } from './album.component';
import { AlbumsComponent } from './albums.component';

import { BindingComponent } from './bindings.component';
import { AuthorsCoponent } from './authors.component';
import { CoursesComponent } from './courses.component';
import { TweetComponent } from "./tweet.component";
import { TabComponent } from "./tab.component";
import { PipeComponent } from "./pipe.component";
import { TaskComponent } from "./task.component";
import { BootstrapPanel } from "./bootstrap.panel.component";
import { ZippyComponent } from "./zippy.component";
import { ContactFormComponent } from "./contact-form.component";
import { SubscriptionComponent } from "./subscription-form.component";
import { SignupComponent } from "./signup.component";
import { ChangePasswordComponent } from "./change-password-form.component";
import { ReactiveExtensionComponent } from "./reactive-extension.component";
import { AdvatureReactiveExtension } from "./advanture-in-rx.component";
import { PostComponent } from "./post.component";
import { GitHubProfileComponent } from "./github-profile.component";


@RouteConfig([
    {path : '/albums' , name : 'Albums' ,component : AlbumsComponent ,  useAsDefault : true},
    {path : '/contatct' , name : 'Contacts' , component : ContactComponent},
    {path : '/*other' , name : 'Other' , redirectTo : ['Albums']}
])
@Component({
    selector: 'my-app',
    templateUrl :'/app/app.component.html',
    directives:[
                RouterOutlet
                ,GitHubProfileComponent
                ,PostComponent
                ,AdvatureReactiveExtension
                ,CoursesComponent
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
                ,SignupComponent
                ,ChangePasswordComponent
                ,ReactiveExtensionComponent]
})
export class AppComponent { }
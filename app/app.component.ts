import {Component} from 'angular2/core';
import { RouteConfig ,RouterOutlet ,RouterLink} from 'angular2/router';

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

/*Exsersize blogging route url */
import {HomeComponent} from './home.component';
import {ArchivesComponent} from './archives.component';
/*
@RouteConfig([
    {path : '/albums' , name : 'Albums' ,component : AlbumsComponent ,  useAsDefault : true},
    {path : '/albums/:id' , name : 'Album' ,component : AlbumComponent},
    {path : '/contact' , name : 'Contact' , component : ContactComponent},
    {path : '/*other' , name : 'Other' , redirectTo : ['Albums']}
])
*/

@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent },
    { path: '/archives/:year/:month', name: 'Archives', component: ArchivesComponent },
    { path: '/*other', name: 'Other', redirectTo: ['Home'] }
])
@Component({
    selector: 'my-app',
    template : `
          <router-outlet></router-outlet>
    `,
   // templateUrl :'/app/app.component.html',
    directives:[
                RouterOutlet 
                ,RouterLink               
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
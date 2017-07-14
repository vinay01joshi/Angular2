import { Component } from "angular2/core";
import { RouteConfig, RouterOutlet } from "angular2/router";

import { AlbumsComponent } from "./albums.component";
import { ContactComponent } from "./contact.component";


@RouteConfig([
    { path: '/contact', name: 'Contact', component: AlbumsComponent, useAsDefault: true } // default route for app
    // { path: '/contact', name: 'Contact', component: ContactComponent },
    // { path: '/*other', name: 'Other', redirectTo:['Albums']}  // route not present in application redirect to toher
])
@Component({
    selector : 'routing-compo',
    templateUrl: '/app/routing/routing.component.html',
    directives :[RouterOutlet]
})
export class RoutingComponent {
    constructor(){
        console.log('routing component calling.')
    }
}
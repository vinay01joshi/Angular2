import {Component} from 'angular2/core';
import { Router,CanDeactivate } from "angular2/router";

@Component({
    templateUrl: '/app/contact.component.html'
})
export class ContactComponent implements CanDeactivate {
    constructor(private _router: Router){

    }

    onSubmit(form){
        console.log(form);
        this._router.navigate(['Albums']);
    }
    routerCanDeactivate(next,prev) {
        return confirm('Are you sure?');
    }
}
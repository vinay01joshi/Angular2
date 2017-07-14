import {Component} from 'angular2/core';

@Component({
    templateUrl: '/app/routing/contact.component.html'
})
export class ContactComponent {
    onSubmit(form){
        console.log(form);
    }
}
import { Observable } from 'rxjs/Observable';
import { ControlGroup, FormBuilder } from 'angular2/common';
import { Component } from 'angular2/core';

@Component({
    selector : 'advanture-rx',
    template : `
        <form [ngFormModel]="form">
            <input class="form-control" type="text" ngControl="search">
        </form>
    `
})
export class AdvatureReactiveExtension {    
    form  : ControlGroup;
    //observable = Observable.fromArray([1,2,3,4]);

    constructor(fb : FormBuilder){
        this.form = fb.group({
            search : []
        });

        var search = this.form.find('search');        
        search.valueChanges
            .debounceTime(400)
            .map(str => (<string>str).replace(' ','-'))
            .subscribe(x=> console.log(x));
        
        var startDates = [];
        var startDate = new Date();

        for(var day  = -2 ; day <= 2 ; day++){
            var date = new Date(
                startDate.getFullYear(),
                startDate.getMonth(),
                startDate.getDate() + day
            );
            startDates.push(date);
        }

        Observable
            .fromArray(startDates)
            .map(date=> console.log("Getting deals for date" + date))
            .subscribe(x=> console.log(x));
    }

}
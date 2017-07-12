/// <reference path="../typings/tsd.d.ts" />

import { Component } from 'angular2/core';
import { Observable } from 'rxjs/Rx';

@Component({
    selector : 'reactive-ex',
    template : `
        <input id="search" type="text" class="form-control" placeholder="search for artist">
    `
})
export class ReactiveExtensionComponent {
     ngAfterViewInit() {        
        var keyups = Observable.fromEvent($("#search"), "keyup")
                .map(e=> e.target.value)
                .filter(text=> text.length >= 1)
                .debounceTime(400)
                .distinctUntilChanged()
                .flatMap(searchTerm => {
                    var url = "https://jsonplaceholder.typicode.com/posts?userId=" + searchTerm;
                    var promise =  $.getJSON(url);
                    return Observable.fromPromise(promise);
                });
       var subscription =  keyups.subscribe( data => console.log(data));

       // if we want to unsubscribse the observable event from the textbox
       //subscription.unsubscribe();
  }
}
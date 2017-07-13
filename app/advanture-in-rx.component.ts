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
            .map(date=> {
              console.log("Getting deals for date" + date);
              return [1,2,3];
            })              
            .subscribe(x=> console.log(x));
    
        // var observable = Observable.interval(1000);
        // observable
        //     .flatMap(x=> {
        //         console.log("calling the server to get the latest news");
        //         return Observable.of([1,2,3]);
        //     })
        //     .subscribe(x=>console.log(x));
        
            var userStream = Observable.of({
                userId : 1 ,
                username : 'vinay'
            });

            var tweetStream = Observable.of([1,2,3]).delay(1500);

            //fork join between to call using parallel calls using rx-js observable
            
            Observable
                .forkJoin(userStream , tweetStream)
                .map(joined => new Object({user : joined[0], tweets : joined[1]}))
                .subscribe(result=> console.log(result));

        var errorObservable = Observable.throw(new Error("someting failed ."));
        errorObservable.subscribe(
            x=> x.console.log(x),
            error => console.error(error)
        );

        var counter = 0 ;

        var ajaxCall = Observable.of('url')
            .flatMap(()=>{
                if(++counter < 2)
                    return Observable.throw(new Error("Request Falied"));

                return Observable.of([1,2,3]);
            })
            .subscribe(x=> console.log(x),
                        error => console.error(error)
        );

        var remoteDataStream = Observable.throw(new Error("Someting failed."));
        remoteDataStream
            .catch(err => {
                var localDataStram = Observable.of([1,2,3,6,7,8,9]);
                return localDataStram;
            })
            .subscribe(x=>console.log(x));
    
        /*Question in quiz*/
        Observable.fromArray([1,2,3])
            .take(3)
            .subscribe(x=> console.log('Question 1- Answer',x));

        Observable.of([1,2,3,4,5])
            .take(3)
            .subscribe(x=> console.log('Question 1- Answer',x));

        Observable.fromArray([1,2,3])           
            .subscribe(
                x=> console.log('Question 3- Answer',x),
                error => console.error(error),
                ()=> console.log("Completed")
            );

        Observable.fromArray(['b','bo','boo','book'])
            .filter(x=>x.length > 3)
            .subscribe(x=> console.log('Question 4 - Answer',x));

        Observable.fromArray(['n','g',' ','2'])
            .map(x=> (<string>x).replace(' ','-'))
            .subscribe(x=> console.log('Question 5 - Answer',x));

        Observable.fromArray([1,2,3])
            .flatMap(x=> Observable.of(['a','b','c']))
            .subscribe(x=> console.log('Question 6- Answer',x));

        Observable.forkJoin(
            Observable.of({username : 'vinay'}),
            Observable.of([1,2,3])
        ).subscribe(x=> console.log("Question 7- Answer -",x[0]))
    }

}
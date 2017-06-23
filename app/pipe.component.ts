import { Component } from 'angular2/core';
import { SummaryPipe } from "./summary.pipe";

@Component({
    selector : 'pipeEx',
    template : `
                    {{course.title | uppercase | lowercase}}
                    <br/>
                    {{course.students | number }}
                    <br/>
                    {{course.rating | number:'2.2-2'}}
                    <br/>
                    {{course.price | currency:'INR':true:'2.2-2'}}
                    <br/>
                    {{course.releaseDate | date:'MMM yyyy'}}
                    <br/>
                    {{course | json }}

                    <hr/>

                    {{post.title}}
                    <br/>
                    {{post.body | summary:10}}
                `,
    pipes :[SummaryPipe]
})
export class PipeComponent {
    course = {
        title : "Angular 2 for Beginners",
        rating : 4.9745,
        students : 5939,
        price : 99.95,
        releaseDate : new Date(2016,3,1)        
    }

    post = {
        title : 'Anular turtorial for Beginners',
        body : `is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                ,when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                `
    }
}
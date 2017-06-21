import { Component } from 'angular2/core';
import { StarComponent } from "./star.component";
import { LikeComponent } from "./like.component";

@Component({
    selector  : 'bindings',
    template : `
                    <h1>{{title}}</h1>
                    <h3 [textContent]="bindingText"></h3>
                    <img src="{{ imageUrl}}"  />
                    <img [src]="imageUrl"  />
                    <img bind-src="imageUrl"  />

                    <button class="btn btn-primary" [class.active]="isActive">Class</button>                                        
                    <button class="btn btn-primary" 
                       [style.backgroundColor]="isActive ? 'blue' : 'grey'">Style</button>
                    <div (click) = "onDivClick()">
                        <button class="btn btn-primary" (click)="onClick($event)">Event1</button>  
                        <button class="btn btn-primary" on-click="onClick()">Event2</button>  
                    </div>

                    <div>
                        <input type="text" [value]="title" (input) ="title = $event.target.value" />
                        Preview : {{title}}
                        <input type="button" (click)="title = ''" value="Clear">
                        <input type="text" [(ngModel)] = "title">
                         <input type="text" bindon-ngModel = "title">
                    </div>
                    <div>   
                        <i class="glyphicon glyphicon-star"></i>
                        <star [is-favorite]="post.isFavorite" (change)="onFavoriteChange($event)"></star>
                    </div>
                    <div>
                        <like></like>
                    </div>
                `,
    directives:[StarComponent,LikeComponent]
})
export class BindingComponent {
    title = "Binding-Example";
    bindingText = "This is Exmaple of Property Binding";
    imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbj4ckLzT-WqEKUbTeeVyyOp4UPi1UXHIrc7OlBBpiqQaUO9Q4";
    isActive = true;

    onClick($event){
        $event.stopPropagation();
        console.log("Event binding is clicked !" , $event);
    }

    onDivClick(){
        console.log("Div clicked!");
    }

     post = {
         title : this.title,
         isFavorite : true
     }

     onFavoriteChange($event){
        console.log($event);
     }
}
import { Component, Input, EventEmitter, Output } from "angular2/core";

@Component({
    selector : 'star',
    template : ` <i class="glyphicon"
                    [class.glyphicon-star-empty]="!isFavorite"
                    [class.glyphicon-star]="isFavorite"
                    (click) = "onClick()">
                 </i>
                `
})
export class StarComponent {
    @Input('is-favorite') isFavorite = false;// making this property as public

    @Output() change = new EventEmitter();

    onClick(){
        this.isFavorite = !this.isFavorite;
        this.change.emit({newValue: this.isFavorite});
    }
}
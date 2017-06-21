import { Component, Input, EventEmitter, Output } from "angular2/core";

@Component({
    selector : 'star',
    templateUrl : 'app/star.templage.html'
})
export class StarComponent {
    @Input('is-favorite') isFavorite = false;// making this property as public

    @Output() change = new EventEmitter();

    onClick(){
        this.isFavorite = !this.isFavorite;
        this.change.emit({newValue: this.isFavorite});
    }
}
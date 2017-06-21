
import { Component } from "angular2/core";

@Component({
    selector : 'like',
    template : `<i class="glyphicon glyphicon-heart">
                </i>
                {{count}}
                `,
    styles :[`
                .glyphicon-heart {
                    color : #ccc
                }
            `]
})
export class LikeComponent {

    liked = true;
    count = 10;
}
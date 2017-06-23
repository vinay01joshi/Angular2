
import { Component } from "angular2/core";

@Component({
    selector : 'tabview',
    template : `
                <ul class="nav nav-pills">
                    <li [class.active]="viewMode == 'map'" > <a (click)="viewMode='map'">Map view</a></li>
                    <li [class.active]="viewMode == 'list'"> <a (click)="viewMode='list'">List View</a></li>
                </ul>
                <div [ngSwitch]="viewMode">
                    <template [ngSwitchWhen]="'map'" ngSwitchDefault>Map view content</template>
                    <template [ngSwitchWhen]="'list'">List view content</template>
                </div>
                `
})
export class TabComponent {
    viewMode = 'map';
}
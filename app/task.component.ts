
import { Component } from "angular2/core";

@Component({
    selector : 'task',
    template : `
        <ul>
            <li>Title : {{ task.title }} </li>
            <li>Assign to: {{ task.assignee != null ? task.assignee.name : "" }} </li>
            <li>Assign to: {{ task.assignee?.name }} </li>
        </ul>
                `    
})
export class TaskComponent {
    task = {
        title : "Review Application",
        assignee : {
            name : null
        }
    }
}
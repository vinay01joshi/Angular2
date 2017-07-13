import { Component } from "angular2/core";
import { PostService } from "./post.service";
import {HTTP_PROVIDERS} from 'angular2/http';
import {OnInit} from 'angular2/core';

@Component({
    selector : 'post-component',
    template : `
    `,
    providers :[PostService,HTTP_PROVIDERS]
})
export class PostComponent implements OnInit {
    constructor(private _postService: PostService) {
       // this._postService.cratePost({userId : 1, title : "a" , body: "b"});
    }

    ngOnInit() {
        this._postService.getPosts()
            .subscribe(posts => console.log(posts));
    }
    
}
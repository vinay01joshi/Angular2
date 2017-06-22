import { Component } from "angular2/core";
import { LikeComponent } from "./like.component";
import { TweetService } from "./tweet.service";

@Component({
    selector : 'tweet',
    template : `
                <div class="media"  *ngFor="#tweet of tweets">
                    <div class="media-left">
                        <a href="#">
                        <img class="media-object" 
                            src="{{tweet.imageUrl}}" alt="">
                        </a>
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading">{{tweet.name}} &nbsp;{{tweet.twitterName}}</h4>
                        <p>{{tweet.title}}</p>
                        <span>
                             <like [totalLikes]="tweet.totalLikes" [iLike]="tweet.iLike"></like>
                        </span>
                    </div>
                </div>
                `
    ,
    directives : [LikeComponent],
    providers :[TweetService]
})
export class TweetComponent {
   tweets;
   constructor(tweetService : TweetService){
       this.tweets = tweetService.getTweets();
   }
}
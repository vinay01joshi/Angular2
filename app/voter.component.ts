import { EventEmitter } from 'angular2/core';
import { Component, Input ,Output } from 'angular2/core';

@Component({
    selector : 'voter',
    template : `   
            <div class="voter-container">     
                <i class="glyphicon glyphicon-menu-up vote-button" 
                [class.highlighted]="myVote == 1"
                (click) ="upVote()"></i>

                <span class="vote-count">{{ voteCount + myVote }}</span>

                <i class="glyphicon glyphicon-menu-down vote-button" 
                [class.highlighted]="myVote == -1"
                (click)= "downVote()"></i>
            </div>    
            `,
    styles :[`
                .voter-container {
                    width : 20px;
                    text-align : center;
                    color:#999;                    
                }

                .vote-count {
                    font-size :1.2em;
                }

                .vote-button {
                    cursor : pointer;
                }

                .highlighted{
                    font-weight :bold;
                    color : orange;
                }
            `]
})
export class VoterComponent {
   @Input() voteCount  = 0 ;
   @Input() myVote = 0 ;
   @Output() vote = new EventEmitter();

   upVote(){
       if(this.myVote == 1)
            return ;
            
       this.myVote++;

       this.vote.emit({myVote : this.myVote});

   }

   downVote(){
        if(this.myVote == -1)
            return;
        this.myVote--;

        this.vote.emit({myVote : this.myVote});
   }

}
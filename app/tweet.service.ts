
export class TweetService {
    getTweets() {
        return [{
                    name : 'Vinay Joshi',
                    imageUrl : 'http://lorempixel.com/100/100/people',
                    twitterName : '@vinay01joshi',
                    title : 'looking for learing Angular 2',
                    totalLikes : 5,
                    iLike : false,
                },
                {
                    name : 'Tanuja Joshi',
                    imageUrl : 'http://lorempixel.com/100/100/people',
                    twitterName : '@tanuja24joshi',
                    title : 'looking for learing SOA',
                    totalLikes : 10,
                    iLike:false
                }];
    }

}
define(['views/tweet_list'], function(TweetListView) {

   var AppRouter = Backbone.Router.extend({
      
      routes: {
         'tweets': 'list',
      },
     
      initialize: function() {
         this.views = {
            tweets: new TweetListView()  
         }
      },
       
      list: function() {
         this.views.tweets.render();
      }

   }); 

   var router = new AppRouter;
   Backbone.history.start();

});

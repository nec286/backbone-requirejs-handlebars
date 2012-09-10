define(['views/tweet'], function(TweetView) {

   var AppRouter = Backbone.Router.extend({
      
      routes: {
         'tweets': 'list',
      },
     
      initialize: function() {
         this.views = {
            'tweet': new TweetView()  
         }
      },
       
      list: function() {
         console.log(
            this.views.tweet
         );
      }

   }); 

   var router = new AppRouter;
   Backbone.history.start();

});

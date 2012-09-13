define(['collections/tweet'], function(Tweets) {

   return Backbone.View.extend({
      
      el: '#main',

      events: {
         'keyup #search': 'search' 
      },

      initialize: function() {
         this.collection = new Tweets();
         
         this.collection.bind('reset', this.update, this);
      },

      render: function() {
         this.$el.html(
            Handlebars.templates.search()
         );

         this.$search = $('#search'),
         this.$tweets = $('#tweets');
      },

      update: function() {
         this.$tweets.html(
            Handlebars.templates.tweets({
               tweets: this.collection.toJSON()  
            })
         );
      },

      search: _.throttle(function(e) {
         this.collection.fetch({
            data: {q: this.$search.val()}  
         });
      }, 1000)
         
   });
   
});

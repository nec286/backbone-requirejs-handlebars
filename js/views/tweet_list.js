define(['collections/tweet'], function(Tweets) {

   return Backbone.View.extend({
      
      el: '#main',

      events: {
         'click #search': 'search'
      },

      initialize: function() {
         this.collection = new Tweets();
         
         this.collection.bind('reset', this.update, this);
      },

      render: function() {
          
      },

      update: function() {
         // update list view with fresh results
      },

      search: function() {
         this.collection.fetch();
      }
         
   });
   
});

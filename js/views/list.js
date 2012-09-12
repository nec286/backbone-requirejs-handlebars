define(['collections/tweet', 'templates/search'], function(Tweets) {

   return Backbone.View.extend({
      
      el: '#main',

      template: Handlebars.templates['search'],

      events: {
         'click #search': 'search' 
      },

      initialize: function() {
         this.collection = new Tweets();
         
         this.collection.bind('reset', this.update, this);
      },

      render: function() {
         this.$el.html(
            this.template()
         );
      },

      update: function() {
         console.log(this.collection);
      },

      search: function() {
         this.collection.fetch();
      }
         
   });
   
});

define(['collections/tweets'], function() {

   return Backbone.View.extend({
      
      el: '#main',

      initialize: function() {
      
      },

      render: function() {
         console.log('rendering a list of tweets using a handlebars template!!');
      }
         
   });
   
});

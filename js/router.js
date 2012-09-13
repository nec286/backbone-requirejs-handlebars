define(['views/search', 'templates/search'], function(SearchView) {

   var AppRouter = Backbone.Router.extend({
      
      routes: {
         'tweets': 'search',
      },
     
      initialize: function() {
         this.views = {
            search: new SearchView()  
         }
      },
       
      search: function() {
         this.views.search.render();
      }

   }); 

   var router = new AppRouter;
   Backbone.history.start();

});

define(['models/tweet'], function(Tweet) {
   return Backbone.Collection.extend({

      model: Tweet,

      url: 'http://search.twitter.com/search.json?callback=?',

      parse: function(response) {
         return response.results;
      }

   });
});

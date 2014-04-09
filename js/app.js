// Filename: app.js
define([
      'router' // Request router.js
], function(Router) {
    return {
        initialize: function() {
            // Pass in our Router module and call it's initialize function
            Router.initialize();
        }
    };
});

// Filename: router.js
define([ // Definining modules for require.js
    'jquery',
    'underscore',
    'backbone',
    'views/home',
    'views/login',
    'views/register',
    'views/404'
], function($, _, Backbone,
    home, login, register, fourO4) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            ':route': 'loadView', // Implements the dynamic routing
            '*actions': 'loadView'
        }
    });

    // TODO: Dynamic routing, paths should be like- products/analytics  :DONE


    var initialize = function() {

        var app_router = new AppRouter;

        app_router.on('route:loadView', function(route) { // 'route' has the current routing path
            route = route.slice(route.lastIndexOf('/') + 1, route.length); // Slices the routing path from '/'
            if (route == '') {
                var view = new home();
                view.render();
            } else {
                try {  // Put try catch because route may have some nonexisting view name
                    var view = null;
                    eval('view= new ' + route + '()');
                    view.render();
                } catch (e) {
                    // Route to 404 page
                    var view= new fourO4();
                    view.render();
                }
            }
        })
        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});

define([
    'jquery',
    'underscore',
    'backbone',
    'views/home',
    'views/login'
   

    ], function ($, _, Backbone, home, loginview) {

        var AppRouter = Backbone.Router.extend({
            routes: {
                // Define some URL routes
                '':'home',
                 
                 
                'login': 'showLogin',
            // Default
             '*actions': 'home'
            }
        });

        var initialize = function () {

            var app_router = new AppRouter;
            console.log(location.hash);
            app_router.on('route:home', function () {
                console.log('varsha');
                // Call render on the module we loaded in via the dependency array
                var Home = new home();
                Home.render();
            });
            app_router.on('route:showLogin', function () {
                console.log('varsha');
                // Call render on the module we loaded in via the dependency array
                var Loginview = new loginview();
                Loginview.render();
            });
            Backbone.history.start();
        };
        return {
            initialize: initialize
        };
    });
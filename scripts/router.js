define([
    'jquery',
    'underscore',
    'backbone',
    'views/home',
    'views/login',
    'views/register',
    'views/profile'
   

    ], function ($, _, Backbone, home, loginview, registerview, profileview) {

        var AppRouter = Backbone.Router.extend({
            routes: {
                // Define some URL routes
                '':'home',
                 
                 
                'login': 'showLogin',
                'register':'showRegister',
                'profile':'showprofile',
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
            app_router.on('route:register', function () {
                console.log('varsha');
                // Call render on the module we loaded in via the dependency array
                var Registerview = new registerview();
                Registerview.render();
            });
            app_router.on('route:profile', function () {
                console.log('varsha');
                // Call render on the module we loaded in via the dependency array
                var Profileview = new profileview();
                Profileview.render();
            });
            Backbone.history.start();
        };
        return {
            initialize: initialize
        };
    });
define([
    'jquery',
    'underscore',
    'backbone',
    'models/login',
    'collections/profiles',
    'text!templates/login.html'
    ], function($, _, Backbone, Login,collection, login) {
        return Backbone.View.extend({
            el: $("#maincontent"),

            render: function() {

                var compiledTemplate = _.template(login);

                this.$el.html(compiledTemplate);
            },
            events: {
                'click .login-button':'loginUser'
            },
            loginUser:function(ev){
                ev.preventDefault();
                console.log("event");
                var login = new Login();
                login.doLogin($('#login-form').serializeObject());
            
            }
        });
    });

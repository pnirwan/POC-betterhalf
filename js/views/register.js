define([
    'jquery',
    'underscore',
    'backbone',
    'models/user',
    'collections/profiles',
    'text!templates/register.html'
    ], function($, _, Backbone, user,collection, register) {
        return Backbone.View.extend({
            el: $("#maincontent"),

            render: function() {

                var compiledTemplate = _.template(register);

                this.$el.html(compiledTemplate);
            },
            events: {
                'click .register-form':'saveUser'
            },
            saveUser:function(ev){
                ev.preventDefault();
                console.log($('form').serializeObject());
                var userdetails = $('form').serializeObject();
                var User = new user(userdetails);
                User.save(null, {
                    success: function(model, response) {
                        console.log(response);
                        if(response!='undefined'){
                            location.hash='profile/'+response.id;
                        }
                    }, 
                    error: function(model, response) {
                        console.log(response);
                    }
                });
                console.log(userdetails);
           
            }
        });
    });
  
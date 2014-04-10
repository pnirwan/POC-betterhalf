define([
    'jquery',
    'underscore',
    'backbone',
    'models/profile',
    'collections/profiles',
    'text!templates/profile.html'
    ], function($, _, Backbone, Profile,collection, profileview) {
        return Backbone.View.extend({
            el: $("#maincontent"),

            render: function() {

                var compiledTemplate = _.template(profileview);

                this.$el.html(compiledTemplate);
            },
            events: {
                'click #update-button':'updateProfile'
            },
            updateProfile:function(ev){
                ev.preventDefault();
                console.log($('form').serializeObject());
                var userdetails = $('form').serializeObject();
                var profile = new Profile(userdetails);
                profile.save(null, {
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
  
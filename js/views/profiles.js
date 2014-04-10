define([
    'jquery',
    'underscore',
    'backbone',
    'models/profile',
    'collections/profiles',
    'text!templates/profile.html'
    ], function($, _, Backbone, Profile,Profiles, profileview) {
        return Backbone.View.extend({
            el: $("#maincontent"),

            render: function() {
                var profiles = new Profiles();
                 profiles.fetch({
                    success:function(collection, response){
                        console.log(response)
                        var data = {
                            profile_data: response.data,
                            _: _
                        };
                        var compiledTemplate = _.template(profileview, data);

                        $(this.el).html(compiledTemplate);
                    },
                    error:function(){
                        console.log("listview")
                    }
                })    
            }
        });
    });

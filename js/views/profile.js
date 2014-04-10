define([
    'jquery',
    'underscore',
    'backbone',
    'models/profile',
    'text!templates/profile.html'
    ], function($, _, Backbone, Profile, profileview) {
        return Backbone.View.extend({
            el: $("#maincontent"),

            events:{
                'click #edit-button':'editProfile',
                'click .update-button':'updateProfile'
            },
            editProfile: function(){
                $('.editable').each(function(){
                    var profile_field=$(this).text();
                    var input_field="<input class='edited-value input-large' value='" +profile_field+"'></input>";
                    $(this).text(input_field);
                })
                $('form').append("<button update-button>Update</button>")
            },
            updateProfile: function(ev){
                ev.preventDefault();
                console.log($('form').serializeObject());
                var userdetails = $('form').serializeObject();
                
                profile.set(userdetails);
                profile.save(null, {
                    success: function(model, response) {
                        console.log(response);
                        if(response!='undefined'){
                            location.hash='profile/'+response.id;
                            console.log(response);
                        }
                    }, 
                    error: function(model, response) {
                        console.log(response);
                    }
                });
                console.log(userdetails);
            },
            render: function(id) {
                console.log(id);
                var profile = new Profile();
                profile.setUrl(id);
                profile.fetch({
                    success:function(profile_data, response){
                        console.log(response);
                        var data = {
                            profile_data: response.data,
                            _: _
                        };
                        var compiledTemplate = _.template(profileview, data);

                        $(this.el).html(compiledTemplate);
                    }
                })    
            }
        });
    });




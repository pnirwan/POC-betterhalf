define([
    'jquery',
    'underscore',
    'backbone'
    ], function($, _, Backbone) {
        var login = Backbone.Model.extend({
            urlRoot:window.base_url+"login",
            defaults:{
                user_name:""
            },
            doLogin:function(data){
                console.log(data);
                $.ajax({
                    type: "POST",
                    data: data,
                    success: function(resp) {
                       // console.log(resp);
                        if(resp!='undefined'){
                            location.hash='profile/'+resp.id;
                        }
                    }
                });
            }
        })
        return login;
    });
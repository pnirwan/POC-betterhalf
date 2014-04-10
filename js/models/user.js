define([
    'jquery',
    'underscore',
    'backbone'
    ], function($, _, Backbone) {
        var user = Backbone.Model.extend({
            urlRoot:window.base_url+"register",
            defaults:{
                user_name:""
            }
        })
        return user;
    });
define([
    'jquery',
    'underscore',
    'backbone'
    ], function($, _, Backbone) {
        var profile = Backbone.Model.extend({
            urlRoot:window.base_url+"profiles/",
            defaults:{
                user_name:""
            },
            setUrl:function(id){
                this.urlRoot+=id;
            }
        })
        return profile;
    });
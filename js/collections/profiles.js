define([
    'jquery',
    'underscore',
    'backbone',
    'models/profile'
    ], function($, _, Backbone, profile) {
        var collection = Backbone.Collection.extend({
            model:profile,
            url:window.base_url+'profiles'
        });
        return collection;
    });


define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/home.html'
    ], function($, _, Backbone, home) {
        return Backbone.View.extend({
            el: $("#maincontent"),

            render: function() {

                var compiledTemplate = _.template(home);

                this.$el.html(compiledTemplate);
            }
        });
    });

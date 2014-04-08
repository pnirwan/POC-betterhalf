define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/register.html'
], function($, _, Backbone, register) {
    return Backbone.View.extend({
        el: $("#maincontent"),

        render: function() {

            var compiledTemplate = _.template(register);

            this.$el.html(compiledTemplate);
        }
    });
});

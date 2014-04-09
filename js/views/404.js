define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/404.html' 
], function($, _, Backbone, fourO4) {
    return Backbone.View.extend({
        el: $("#templateContent"),

        render: function() {

            var compiledTemplate = _.template(fourO4);

            this.$el.html(compiledTemplate);
        }
    });
});

'use strict';

module.exports = Backbone.View.extend({
  el: '#header',
  template: function() {
    return window.JST['templates/application/header.hbs'](this.model);
  },
  render: function() {
    this.$el.html(this.template());
  }
});

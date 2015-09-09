module.exports = Backbone.View.extend({
  el: 'footer',
  template: function() {
    return window['JST']['templates/application/footer.hbs'](this.model);
  },
  render: function() {
    this.$el.html(this.template());
  }
});

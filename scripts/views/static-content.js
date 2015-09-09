module.exports = Backbone.View.extend({
  el: '.content',
  config: require('../config'),
  initialize: function(options) {
    this.template = options.template;
    this.backgroundImageClass = options.backgroundImageClass;
  },
  createTemplate: function(templateName, data) {
    var templatePath = 'templates/' + templateName + '.hbs';
    var templateString = window['JST'][templatePath](data);
    return templateString;
  },
  render: function() {
    //this.swapBackgroundImages();

    var template = this.createTemplate(this.template, this.config);
    this.$el.html(template);
  },
  swapBackgroundImages: function() {
    $(".wrapper").removeClass (function (index, css) {
      return (css.match (/(^|\s)background-image-\S+/g) || []).join(' ');
    }).addClass;
    if (this.backgroundImageClass) {
      $('.wrapper').addClass(this.backgroundImageClass);
    }        
  }
});

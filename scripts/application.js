'use strict';

var FooterView = require('./views/application/footer');
var HeaderView = require('./views/application/header');
var Router = require('./routers/application');
var StaticContentView = require('./views/static-content');

function Application() {
  var render = function(view) {
    headerView.render();
    footerView.render();    
    view.render();
  };

  var config = require('./config');
  var footerView = new FooterView({model: config});
  var headerView = new HeaderView({model: config});
  var homeView = new StaticContentView({template:'home'});
  var aboutUsView = new StaticContentView({template:'about/about-us'});
  var contactUsView = new StaticContentView({template:'contact-us'});
  var membershipView = new StaticContentView({template:'about/membership'});
  var fundingView = new StaticContentView({template:'about/funding'});
  var leadershipView = new StaticContentView({template:'about/leadership'});
  var whatWeBelieveView = new StaticContentView({template:'about/what-we-believe'});
  var philosophyView = new StaticContentView({template:'missions/philosophy'});
  var involvementView = new StaticContentView({template:'missions/involvement'});
  var whoWeSupportView = new StaticContentView({template:'missions/who-we-support'});

  this.router = new Router();

  this.router.on('route:home', function() {
    render(homeView);
  });
  this.router.on('route:aboutUs', function() {
    render(aboutUsView);
  });
  this.router.on('route:membership', function() {
    render(membershipView);
  });
  this.router.on('route:funding', function() {
    render(fundingView);
  });
  this.router.on('route:leadership', function() {
    render(leadershipView);
  });
  this.router.on('route:whatWeBelieve', function() {
    render(whatWeBelieveView);
  });    
  this.router.on('route:philosophy', function() {
    render(philosophyView);
  });
  this.router.on('route:involvement', function() {
    render(involvementView);
  });
  this.router.on('route:whoWeSupport', function() {
    render(whoWeSupportView);
  });
  this.router.on('route:contactUs', function() {
    render(contactUsView);
  });

  Backbone.history.start();
}

window.App = new Application();

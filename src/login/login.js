angular.module('adsApp.login',['adsApp.login.directives', 'adsApp.login.controllers'])

.config(function($routeProvider) {
  $routeProvider.when('/login', {
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl as ctrl'
  });
})

;

angular.module('adsApp.register',['adsApp.register.controllers'])

.config(function($routeProvider) {
  $routeProvider.when('/register', {
      templateUrl: 'templates/register.html',
      controller: 'RegisterCtrl as ctrl'
  });
})

;

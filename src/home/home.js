angular.module('adsApp.home',['adsApp.home.controllers'])

.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'src/home/home.html',
    controller: 'HomeCtrl'
  });
})

;
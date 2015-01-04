angular.module('ap.ads', [
  'ap.ads.controllers',
  'ap.ads.services',
  'ap.ads.directives',
  'ui.router'
])

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'src/ads/home.html',
    controller: 'AdsController'
  });
})
;
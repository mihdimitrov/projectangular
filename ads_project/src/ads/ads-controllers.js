angular.module('ap.ads.controllers', [
  'ap.ads.services'
])

.controller('AdsController', function($scope, AdsService) {
  $scope.text = "hello";
});
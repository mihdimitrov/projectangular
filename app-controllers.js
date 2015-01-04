angular.module('ap.ads.controllers', [
  'ap.ads.services'
])

.controller('AppController', function($scope, adsService) {
  $http.get('http://softuni-ads.azurewebsites.net/api/ads')
    adsService.getAllAds()
    .success(function(data) {
      $scope.adTuples = formatAdsInTuples(data.ads);
    });

    var formatAdsInTuples = function(adsList) {
      var tuple, adTuples = [];
      angular.forEach(adsList, function(ad, ind) {
        if (ind % 2 == 0) {
          adTuples.push(tuple);
          tuple = [ad];
        }
        else {
          tuple.push(ad);
        }
      });
      return adTuples.slice(1);
    };
});
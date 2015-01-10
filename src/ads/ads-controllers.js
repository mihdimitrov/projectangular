angular.module('adsApp.ads.controllers', [
	'adsApp.ads.services'
])

.controller('AdsCtrl', function($scope, $http, AdsSrvc) {
  $http.get('http://softuni-ads.azurewebsites.net/api/ads')
    .success(function(data) {
      $scope.adTuples = [formatAdsInTuples(data.ads)[0]];
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
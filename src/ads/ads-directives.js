angular.module('adsApp.ads.directives', [])

.directive('adsAppAdContent', function() {
  return {
    templateUrl: 'src/ads/ad-content.html',
    scope: {
      adObject: '='
    },
    controller: function($scope) {
      if ($scope.adObject.imageDataUrl === null) {
      	$scope.adObject.imageDataUrl = 'http://www.simtrix.com/img/not_available_big.jpg';
    	}
    }
  }
})
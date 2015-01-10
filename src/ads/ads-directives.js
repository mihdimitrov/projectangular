angular.module('adsApp.ads.directives', [])

.directive('adsAppAdContent', function() {
  return {
    templateUrl: 'src/ads/ad-content.html',
    scope: {
      adObject: '='
    }
  }
})
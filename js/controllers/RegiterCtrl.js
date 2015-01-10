'use strict';
adsApp.controller('RegisterCtrl', ['$scope', 'townsData', 'userData', function($scope, townsData, userData){
    this.pageTitle='Register';

    townsData.getTowns()
        .$promise
        .then(function(data){
            $scope.towns=data;
        });
    this.register=function(user){
        userData.register(user);
    };
}]);
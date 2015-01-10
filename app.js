'use strict';

angular.module('adsApp', ['ngRoute','adsApp.home','adsApp.ads'])
    .constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net/api/')

    .config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'src/home/home.html',
            controller: 'HomeCtrl'
        });
        $routeProvider.when('/login', {
            templateUrl: 'templates/login.html',
            controller: 'LoginCtrl as ctrl'
        });
        $routeProvider.when('/register', {
            templateUrl: 'templates/register.html',
            controller: 'RegisterCtrl as ctrl'
        });
        $routeProvider.otherwise({
            redirectTo: '/'
        });
    });
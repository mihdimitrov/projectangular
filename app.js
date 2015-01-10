'use strict';

angular.module('adsApp', ['ngRoute','adsApp.home','adsApp.ads','adsApp.login', 'adsApp.controllers', 'adsApp.register'])
    .constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net/api/')

    .config(function ($routeProvider) {
        $routeProvider.otherwise({
            redirectTo: '/'
        });
    });
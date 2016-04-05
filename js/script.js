var michalApp = angular.module('michalApp', ['ngRoute']);

michalApp.controller('mainController', function($scope) {
	$scope.message = 'dziala';
});


michalApp.config(function($routeProvider){
  	$routeProvider
	  	.when('/', {
	        templateUrl : 'views/home/index.html',
	        controller  : 'mainController'
	    })
	  	.when("/home",	{
	      	templateUrl: "views/home/index.html",
	        controller  : 'mainController'

	    });
	});
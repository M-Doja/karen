(function() {
	'use strict';
	angular.module('app', ['ui.router', 'ngMaterial', 'ui.bootstrap'])
	.config(Config);
	Config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function Config($stateProvider, $urlRouterProvider) {
		$stateProvider.state('Home',{
			url: '/',
			templateUrl: 'views/home.html',
			controller: 'HomeController',
			controllerAs: 'vm'
		}).state('Service',{
			url: '/service',
			templateUrl: 'views/services.html',
			controller: 'HomeController',
			controllerAs: 'vm'
		}).state('About',{
			url: '/about',
			templateUrl: 'views/about.html',
			controller: 'HomeController',
			controllerAs: 'vm'
		}).state('Contact',{
			url: '/Contact',
			templateUrl: 'views/contact.html',
			controller: 'HomeController',
			controllerAs: 'vm'
		});
		$urlRouterProvider.otherwise('/');
	}
})();

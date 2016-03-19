(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);

	HomeController.$inject = [];

	function HomeController(HomeFactory) {
		var vm = this;
		vm.title = 'WRITING RENOVATIONS';
		vm.user = {}

	 vm.openNav = function() {
				document.getElementById("mySidenav").style.width = "250px";
		}
	 vm.closeNav = function() {
				document.getElementById("mySidenav").style.width = "0";
		}




	}
})();

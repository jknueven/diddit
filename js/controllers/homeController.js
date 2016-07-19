  'use strict';

angular.module("diddit").controller("homeController", function(API) {

	var vm = this;
	
	var data = API.getPosts();


	 data.then(function(posts){
	 	console.log(posts)
	 	vm.data = posts.data.data

	 });

	

});
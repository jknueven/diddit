  'use strict';

angular.module("diddit").controller("homeController", function(API) {

	var vm = this;
	
	var data = API.getPosts();

	data.then(function(post){
		vm.data = post.data.posts

	});

	

});
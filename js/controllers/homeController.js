  'use strict';

angular.module("diddit").controller("homeController", function(API) {

	var vm = this;
	
	var data = API.getPosts();


	 data.then(function(posts){
	 	
	 	vm.data = posts.data.data

	 });

	 vm.postUpLikes= function(posts){
		var likeUp = API.postLikes(posts.id, posts.likes + 1);
		
		likeUp.then(function(response){
		console.log(response);
		posts.likes ++;
		});
	}

	vm.postDownLikes = function(posts){
		var likeDown = API.postLikes(posts.id, posts.likes - 1);
		
		likeDown.then(function(response){
		console.log(response);
		posts.likes --;
		});
	}

});
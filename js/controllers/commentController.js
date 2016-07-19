  'use strict';

angular.module("diddit").controller("commentController", function(API, $stateParams) {

	var vm = this;
	
	var id = $stateParams.commentid;

	var data = API.getAPost(id);


	 data.then(function(post){
	 	console.log(post);
	 	vm.data = post.data.data;

	 });

	 vm.submit = function(){
		var postComment = API.postComment(vm.form);
		
		 postComment.then(function(response){
		 	console.log(response);
		 	
		 	vm.form = "";

		 });

		}

});
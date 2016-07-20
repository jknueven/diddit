  'use strict';

angular.module("diddit").controller("commentController", function(API, $stateParams) {

	var vm = this;
	
	var id = $stateParams.commentid;

	var data = API.getAPost(id);


	 data.then(function(post){
	 	
	 	vm.data = post.data;

	 });

	 var comments = API.getComments();

	 comments.then(function(comments){
	 	console.log(comments);

	 });

	 vm.submit = function(){
		var postComment = API.postComment(vm.form);
		
		 postComment.then(function(response){
		 	console.log(response);
		 	
		 	vm.form = "";

		 });

		}

});
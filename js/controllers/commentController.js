  'use strict';

angular.module("diddit").controller("commentController", function(API, $stateParams,$scope,$state) {

	var vm = this;
	
	var id = $stateParams.commentid;

	var data = API.getAPost(id);


	 	data.then(function(post){
	 	
	 		vm.data = post.data;
	 	});

	 vm.submit = function(){
	 	vm.form.post_id = vm.data.id;
		var postComment = API.postComment(vm.form);
		
		 postComment.then(function(response){
		 	console.log(response);
		 	
		 	vm.form = "";

		 	$state.reload();


		 });

		}

});
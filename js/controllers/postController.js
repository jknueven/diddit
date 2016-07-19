  'use strict';

angular.module("diddit").controller("postController", function(API) {

	var vm = this;

	vm.submit = function(){
		var postImage = API.postPost(vm.form);
		alert("test");

		 postImage.then(function(response){
		 	
		 	vm.form = "";



		 });

	}
	

});
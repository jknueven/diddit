(function () {
	'use strict';
	angular
		.module('diddit').factory('API', function($http) {


		 	function getPosts(post)
		 	{
		 		var call = $http({
		          method: 'GET',
		          url: `https://api.backand.com:443/1/objects/posts`,
		         
		        });	
		        return call;

		 	}

		 	function postPost(data)
		 	{
		 		data.likes=0;
		 		var going = $http ({
  					method: 'POST',
  					data: data,
  					url: 'https://api.backand.com:443/1/objects/posts',
  					
		 		});
		 		return going;
		 	}

		 	function getAPost(id)
		 	{
		 		var single = $http({
		 			method: 'GET',
		 			url: ''+id,
		 			header: {
		 				X_CSRF_TOKEN : "jared",
		 			}
		 		});
		 		return single;
		 	}

		 	function postLikes(id, likes){
		 		var data = {
		 			likes: likes,
		 		}
		 		var like = $http ({
		 			method: 'PUT',
		 			data: data,
		 			url: 'https://api.backand.com:443/1/objects/posts/' +id,
		 		});
		 		return like;
		 	}


		 	return {
		 		getPosts:getPosts,
		 		postPost:postPost,
		 		getAPost:getAPost,
		 		postLikes:postLikes,
		 	}
	});
})();
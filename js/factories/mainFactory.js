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

		 	function postComment(data)
		 	{
		 		data.likes=0;
		 		var comment = $http ({
  					method: 'POST',
  					data: data,
  					url: 'https://api.backand.com:443/1/objects/comment',
  					
		 		});
		 		return comment;
		 	}

		 	function getComments(comment)
		 	{
		 		var call = $http({
		 			method: 'GET',
		 			url: 'https://api.backand.com:443/1/objects/comment',
		 		});
		 		return call;
		 	}

		 	function getAPost(id)
		 	{
		 		var single = $http({
		 			method: 'GET',
		 			url: 'https://api.backand.com:443/1/objects/posts/'+ id + '?deep=true',
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
		 		postComment:postComment,
		 		getComments:getComments,
		 	}
	});
})();
(function(){
'use strict';

angular.module('diddit', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise("/");

	$stateProvider
	.state('home', {
		url: '/',
		views: {
			'main': {
				templateUrl: '../views/home.html',
				controller: 'homeController',
				controllerAs: 'home',
			},
			'nav': {
				templateUrl:'../views/partials/nav.html',
			},
		},
	})
	.state('comment', {
		url: '/comment',
		views: {
			'main': {
				templateUrl: '../views/comment.html',
				controller: 'commentController',
				controllerAs: 'comment',
			},
			'nav': {
				templateUrl:'../views/partials/nav.html',
			},
		},
	})
	.state('post', {
		url: '/post',
		views: {
			'main': {
				templateUrl: '../views/post.html',
				controller: 'postController',
				controllerAs: 'post',
			},
			'nav': {
				templateUrl:'../views/partials/nav.html',
			},
		},
	});

});
	
})();
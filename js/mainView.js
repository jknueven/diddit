(function(){
'use strict';

angular.module('diddit', ['ui.router', 'backand'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider, BackandProvider){

	BackandProvider.setAppName('diddit');
    BackandProvider.setSignUpToken('a0756801-0937-4418-aa8e-28d276c06112');
    BackandProvider.setAnonymousToken('22f12152-609f-47cd-80d4-a86231782c2f');

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
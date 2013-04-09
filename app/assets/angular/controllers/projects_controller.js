'use strict';

var app = angular.module('app');

app.controller('ProjectIndexController', function($scope, Project) {
	$scope.items = Project.query();	
});

app.controller('ProjectCreateController', function($scope, $location, Project) {
	$scope.save = function() {
		var project = new Project($scope.project);
		project.$save(function() {
			$location.path('/');
		}, function(response) {
			$scope.errors = response.data.errors;
		});
	}
});

app.controller('ProjectShowController', function($scope, Project, Task, $routeParams){
	$scope.project = Project.get({id: $routeParams.id})
});

app.controller('ProjectEditController', function($scope, $routeParams, $location, Project) {
    console.log($routeParams.id);	
    Project.get({id: $routeParams.id}, function(project) {
    	$scope.project = new Project(project);
    });
	$scope.update = function(project) {
		Project.update(project);
		$location.path('/projects');
	}
});
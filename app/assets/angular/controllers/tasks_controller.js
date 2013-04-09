'use strict';

var app = angular.module('app');

app.controller('TasksController', function($scope, Task, $routeParams) {
	$scope.tasks = Task.query({projectId: $routeParams.id});

	$scope.completed_tasks = Task.query({projectId: $routeParams.id, complete: true});
	// $scope.uncompleted_tasks = Task.query({projectId: $routeParams.id, complete: false});	
	$scope.save = function() {
		console.log($scope);
		var obj = new Task({name: $scope.name, projectId: $routeParams.id});
		obj.$save(function(response) {
			$scope.tasks.unshift(response);
			$scope.name = "";
			

		}, function(response) {
			$scope.errors = response.data.errors;
		});
	}

	$scope.updateTask = function($event, t_id) {
		var checkbox = $event.target;
  		var action = (checkbox.checked ? true : false);
		var data = {project_id: $routeParams.id, complete: action};
		Task.get({projectId: $routeParams.id, id: t_id}, function(resource) {
	      var task = resource;
	      task.complete = action;
	      task.$update({projectId: $routeParams.id});
	    }, function(response) {
	    });

	}

	$scope.updateTaskDiv = function() {
		var all_tasks = $scope.tasks;
		$scope.completed_tasks = [];
		angular.forEach(all_tasks, function(task) {

			if(task.complete) $scope.completed_tasks.push(task);
		});
	}
});


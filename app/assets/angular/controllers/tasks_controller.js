'use strict';

var app = angular.module('app');

app.controller('TasksController', function($scope, Task, $routeParams) {
	$scope.tasks = Task.query({projectId: $routeParams.id});

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
		console.log("-----------------------------" + checkbox);
  		var action = (checkbox.checked ? true : false);
		console.log("-----" + action + "hdfhgdhdh" + t_id);
		var data = {project_id: $routeParams.id, complete: action};
		// Task.update({id: t_id}, data, function(resource) {
  //     		console.log(resource);
  //   	}, function(response) {
  //     		console.log(response);
  //   	});
		$scope.task = Task.get({id: t_id})

	}
});


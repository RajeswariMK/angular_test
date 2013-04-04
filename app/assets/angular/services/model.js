'use strict';

var app = angular.module('app');
app.factory('Project', function($resource) {
	return $resource('/projects/:id', {id: '@id'});

});

app.factory('Task', function($resource) {
	return $resource('/projects/:projectId/tasks/:id', {projectId: '@projectId', id: '@id'}, {update: { method: 'PUT'}
  });
});
var app = angular.module('plunker', ['ui.sortable']);

app.controller('MainCtrl', function($scope) {
  $scope.ctrlr = {};
  $scope.ctrlr.items = [];
  $scope.ctrlr.items.push({'Id': 0, 'Label': 'Item 0'});
  $scope.ctrlr.items.push({'Id': 1, 'Label': 'Item 1'});
  $scope.ctrlr.items.push({'Id': 2, 'Label': 'Item 2'});
  $scope.ctrlr.items.push({'Id': 3, 'Label': 'Item 3'});
  $scope.ctrlr.items.push({'Id': 4, 'Label': 'Item 4'});
  $scope.sortableOptions = {
    containment: '#sortable-container'
  };
});
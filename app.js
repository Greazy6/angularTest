var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope){
	$scope.firstName="John";
	$scope.lastName="Doe";
	$scope.sFirstName="Eric";
	$scope.sLastName="Greise";
});
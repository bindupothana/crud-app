var myApp = angular.module("myApp",[]);

myApp.controller("myController", function($scope){
	console.log("In myController...");

	 
  $scope.users=[

	{username: "swetha", email:"swetha@navrathan.com", Phone:"936589714", city:"hyderabad"}
	{username: "himabindu", email:"bindu@navrathan.com", Phone:"789564235", city:"hyderabad"}
	{username: "jyothi", email:"jyothi@navrathan.com", Phone:"894564789", city:"vizag"}
	];
});
var app = angular.module('groceryListApp', ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "views/groceryList.html",
            controller: "GroceryListItemsController"
        })
        .when("/addItem", {
            templateUrl: "views/addItem.html",
            controller: "GroceryListItemsController"
        })
        .when("/addItem/:id/:cat", {
            templateUrl: "views/addItem.html",
            controller: "GroceryListItemsController"
        })
        .otherwise({
            redirectTo: "/"
        })
});

app.service("GroceryService", function() {
    var groceryService ={};

    groceryService.groceryItems = [
        {completed: true, itemName: 'milk', date: '2014-10-01'},
        {completed: true, itemName: 'cookies', date: '2014-10-01'},
        {completed: true, itemName: 'ice cream', date: '2014-10-02'},
        {completed: true, itemName: 'potatoes', date: '2014-10-02'},
        {completed: true, itemName: 'cereal', date: '2014-10-03'},
        {completed: true, itemName: 'bread', date: '2014-10-03'},
        {completed: true, itemName: 'eggs', date: '2014-10-04'},
        {completed: true, itemName: 'tortillas', date: '2014-10-04'}
    ];

    return groceryService;

});

app.controller("HomeController", ["$scope", "GroceryService", function($scope, GroceryService) {
	$scope.appTitle= GroceryService.groceryItems[0].itemName;
    
    
}]);

app.controller("GroceryListItemsController", ["$scope", "$routeParams", "GroceryService", function($scope, $routeParams, GroceryService) {

	$scope.groceryItems = GroceryService.groceryItems;

    $scope.rp = "Route Parameter Value: " + $routeParams.id + $routeParams.cat;

}]);
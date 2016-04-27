var myApp = angular.module('myApp',[]);
myApp.controller('DemoController', ['$scope', '$http', function($scope,$http){ 
	
	activate(); //verifies data is available when the page loads
	function activate(){
		$http({
		  method: 'GET', 
		  url: 'topspots.json'
			}).then(function (response) { 
		    	$scope.spot = response.data; //Scopes(grabs) data
		  });

	}//end of function	
}]);
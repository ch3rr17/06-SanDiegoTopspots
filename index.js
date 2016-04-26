var myApp = angular.module('myApp',[]);
myApp.controller('DemoController', ['$scope', '$http', function($scope,$http){ //$scope object to bind stuff2nd element is a func of an array
	
	activate(); //data available when the page loads
	function activate(){
		$http({
		  method: 'GET', //get something..
		  url: 'topspots.json'
			}).then(function (response) { //...and do something with it
		    	//debugger;
		    	$scope.name = response.data;
		  });

	}//end of function	
}]);
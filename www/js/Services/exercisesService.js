angular.module('starter.services')
	.factory('exercisesService', ['$http', 'resourcePath',function ($http, resoursePath) {

		var list=[];
		var loadExercises= function(){
			var path=resoursePath+'exercisesTemporary.json';
			$http.get(path)
				.then(function(resolve){
					//console.log(resolve);
					var data=resolve.data;
					console.log(data.exercises);
					list= data.exercises;	
				}, function(err)  {
					console.log('Error');
				});

			return list;
		}

		return {
			'load': loadExercises
		}
	}]);





































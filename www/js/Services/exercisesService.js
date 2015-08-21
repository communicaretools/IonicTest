angular.module('starter.services')
	.factory('exercisesService', ['$http', 'resourcePath', '$localStorage' , function ($http, resoursePath, $localStorage) {

		var list=[];

		var getList = function(aPassedFunction){
			var path=resoursePath+'exercisesTemporary.json';
			$http.get(path)
				.then(function(success){
					list= success.data.exercises;
					aPassedFunction(list);//This function is defined when we call the getList
				}, function(error)  {
					console.log('Error');
				});
		};

		//storage
		var getFv = function() {
			var fv= $localStorage.favourites
			if(fv) {
				return fv;
			}
			return []; 
		};

		var saveFv = function(exercise) {

			if(!$localStorage.favourites){
				$localStorage.favourites=[];
			}
			$localStorage.favourites.push(exercise);
		};

		var getExerciseById = function(id) {
			console.log("getExerciseById");
			var list=$localStorage.exList;
			for  (i=0; i<list.length; i++ ) {
				console.log(list[i]);
				if(list[i] !== null) {//Not working
            
					if(list[i].id==id) {
						return list[i];
					}
				}

			}
			return null;

		};

		return {
			'getList': getList,
			'getFv': getFv,
			'saveFv': saveFv,
			'getExerciseById': getExerciseById
		};
	}]);





































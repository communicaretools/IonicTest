angular.module('starter.services')
	.factory('exercisesService', ['$http', 'resourcePath', '$localStorage' , function ($http, resoursePath, $localStorage) {

		var list=[];

		/*'getlist' ask for a resource. if it's successed, it loads the resource's data into a variable 'list' and call someFunction that gets this data as its argument. This someFunction will be defined when calling 'getList' (and its argument contains the resourc's data)
		Is that what we call a promise?  Does 'getList' returns a promice?
		*/
		var getList = function(someFunction){
			var path=resoursePath+'exercisesTemporary.json';
			$http.get(path)
				.then(function(success){
					list= success.data.exercises;
					someFunction(list);//This function is defined when we call the getList
				}, function(error)  {
					console.log('Error');
				});
		};


		//storage
		var getFv = function() {
			var fv= $localStorage.favourites;
			if(fv) {
				return fv;
			}
			return []; 
		};

		//Saving exercise to localstordage favourites object
		var saveFv = function(exercise) {
			if(!$localStorage.favourites){
				$localStorage.favourites=[];
			}

			//check that exercise isn't already in favourites
			if(!searchInList($localStorage.favourites, exercise.id)) {
				exercise.fv=true;
				$localStorage.favourites.push(exercise);
			}
			return exercise;
		};

		//Return true if exercise is in the list
		var searchInList=function(list, id) {
			for (var i=0; i<list.length; i++) {
				if(list[i].id==id) {
					return true;
				}
			}
			return false;
		};

		//using the $stateParams to define the exercise (in the ExerciseCtrl)
		var getExerciseById = function(id) {
			var list=$localStorage.exList;
			for  (i=0; i<list.length; i++ ) {
          
					if(list[i].id==id) {
						return list[i];
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





































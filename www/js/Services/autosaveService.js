angular.module('starter.services')
    .factory("autosaveService", [
        "$http",
        "$log",
        "ApiEndpoint", function ($http, $log, ApiEndpoint) {
            var autosaveEndpoint = ApiEndpoint.connectApiUrl + '/autosaver/api/autosaver';
            //var autosaveEndpoint = "http://localhost:8100/autosaverTest"

            var onError = function (e) {
                $log.error(e.msg);
            };

            var saveAutosave = function (module, data, onSuccess) {
                $http.post(autosaveEndpoint + "/autosave?module=" + module, {model: data})
                    .then(onSuccess, onError);
            }

            var getAutosave = function (module, onSuccess) {
                $http.get(autosaveEndpoint + "/autosave?module=" + module)
                    .then(onSuccess, onError);
            }

            var deleteAutosave = function (module, onSuccess) {
                $http.delete(autosaveEndpoint + "/autosave?module=" + module)
                    .then(onSuccess, onError);
            }
            
            return {
                "get": getAutosave,
                "save": saveAutosave,
                "delete": deleteAutosave,
            };
        }
    ]);
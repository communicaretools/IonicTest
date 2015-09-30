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

            var saveAutosave = function (module, localIdentifier, data, onSuccess) {
                if (!data) return;
                var model = { module: module, data: JSON.stringify(data) };
                $http.post(autosaveEndpoint + "/autosave/"+localIdentifier,  model)
                    .then(onSuccess, onError);
            }

            var getAutosave = function (module, localIdentifier, onSuccess) {
                $http.get(autosaveEndpoint + "/autosave/"+localIdentifier+"?module=" + module)
                    .then(onSuccess, onError);
            }

            var deleteAutosave = function (module, localIdentifier, onSuccess) {
                $http.delete(autosaveEndpoint + "/autosave/" + localIdentifier + "?module=" + module)
                    .then(onSuccess, onError);
            }
            
            return {
                "get": getAutosave,
                "save": saveAutosave,
                "delete": deleteAutosave,
            };
        }
    ]);
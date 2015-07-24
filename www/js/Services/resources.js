angular.module('starter.services')
    .service('resources', [
        function () {
            var get = function(key) {
                return 'bjelle';
            };

            return {
                get: get
            };
        }
    ]);
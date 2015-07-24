angular.module('starter.directives')
    .directive('r', ['resources', function(resources) {
        
        var setContent = function (resText, element, attrs) {
            console.log(element[0]);

            if (!resText) {
                resText = 'missing:' + attrs.r;
            }
            if (element[0].localName === "ion-view") {
                //element[0].attr("view-title", resText);
                element.attr("view-title", resText);
            }

            //element.html(resText);
        };

        return function(scope, element, attrs) {
            console.log(element);
            setContent(resources.get(attrs.r), element, attrs);
            /*if (promise && angular.isFunction(promise.then)) {
                promise.then(function (value) {
                    setContent(value, element, attrs);
                });
            } else {
                setContent(resources.get(attrs.r), element, attrs);
            }*/
        };
    }]);

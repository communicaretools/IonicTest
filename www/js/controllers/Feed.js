angular.module('starter.controllers')
    .controller('FeedCtrl', [
        'resources',
        'feedService',
        function (resources, feedService) {
            var vm = this;

            var loadFeed = function (page) {
                page = page ? page : 1;
                feedService.get(page, function (result) {
                    vm.title = resources.get("feedTitle");
                    vm.reminders = result.data.reminders;
                    vm.feed = result.data.entries;
                });
            };
            vm.setClasses = function(data) {
                data.moduleClass = data.module.toLowerCase();
                data.typeClass = data.type.toLowerCase();
            };

            vm.feed = [];
            vm.reminders = [];
            loadFeed();
        }
    ]);
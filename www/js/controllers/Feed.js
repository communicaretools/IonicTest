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

            vm.feed = [];
            vm.reminders = [];
            loadFeed();
        }
    ]);
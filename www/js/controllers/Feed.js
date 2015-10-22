angular.module('starter.controllers')
    .controller('FeedCtrl', [
        'resources',
        'feedService',
        function (resources, feedService) {
            var vm = this;
            var currentPage = 1;

            var onGetFeedSuccess = function (result) {
                vm.feedAPILoaded = true;
                vm.reminders = result.data.reminders;
                vm.feed = result.data.entries;
                vm.hasMore = result.data.hasMoreEntries;
                vm.feedLoaded = true;
            };

            var loadFeed = function () {
                feedService.get(currentPage, onGetFeedSuccess);
                vm.title = resources.get("feedTitle");
            };

            vm.setClasses = function(data) {
                data.moduleClass = data.module.toLowerCase();
                data.typeClass = data.type.toLowerCase();
            };
            vm.loadMore = function() {
                if (vm.hasMore) {
                    vm.feedAPILoaded = false;
                    feedService.get(++currentPage, onGetFeedSuccess)
                }
            };

            vm.feed = [];
            vm.reminders = [];
            vm.hasMore = false;
            vm.feedAPILoaded = false;
            vm.feedLoaded = false;
            loadFeed();
        }
    ]);
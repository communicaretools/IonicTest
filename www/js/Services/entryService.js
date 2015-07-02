angular.module('starter.services')
	.factory('entryService', function() {
		var selected;
		
		var entries1 = [
		{
			date: new Date(),
			content:"Her går det så det griner"
		}];
		var entries2 = [
		{
			date: new Date(),
			content:"jeg har det helt topp"
		},
		{
			date: new Date(),
			content:"Det var da fint"
		}];

		var threads = [
		{
			id: 0,
			entries: entries1
		},
		{
			id: 1,
			entries: entries2
		}];

		var onError = function (e) {
		    $log.error(e.msg);
		};
		
		var addEntry = function (threadId, entry) {
			var entries = getEntries(threadId);
			entries.push({
				date: new Date(),
				content: entry.content,
				quoteText: entry.quoteText
			});
		};
		var transform = function (list) {
		    return list.map(function (entry) {
		        var parts = entry.links[0].href.split("/");
		        var id = parts[parts.length - 1];
		        return angular.extend(entry, { "id": id });
		    });
		};
		var getEntries = function (threadId){
			console.log("threadId :" + threadId + "=== 0 is" + threadId === 0);
			var idAsInt = parseInt(threadId);
			return idAsInt === 0 ? entries1 : entries2;
		};

		var selectEntry = function (threadId, entryNumber) {
			var entries = getEntries(threadId);
			if(entryNumber == -1) selected = null;
			selected = entries[entryNumber];
		};

		var getSelected = function () {
			return selected;
		};

		var deleteEntry = function(threadId, index) {
			var entries = getEntries(threadId);
			entries.splice(index, 1);
			console.log(entries);
		};

		return {
			"add": addEntry,
			"get": getEntries,
			"selectEntry" : selectEntry,
			"getSelected": getSelected,
			"deleteEntry": deleteEntry
		};
	});
/* --------------
 initialization 
  the xdkFilter argument can be set to a function that
   receives the data of the service method and can return alternate data
   thus you can reformat dates or names, remove or add entries, etc.
   -------------- */

angular.module('myApp',['ionic']).config(['$controllerProvider', function($controllerProvider) {
	$controllerProvider.allowGlobals();
}]);


data_support.ready(intel.xdk.services.flickrphotos_search.bind(null, {"tags":"","tag_mode":"any","group_id":"","radius":"","lat":"","lon":"","per_page":"100","page":"1","xdkFilter":null}));
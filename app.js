angular.module('angularApp', [])
  
  .factory('GoogleClient', function($window, $q) {
    var deferred = $q.defer();

    $window.handleClientLoad = function handleClientLoad() {
      // Simulate 1s loading delay
      setTimeout(function() {
        deferred.resolve();
      }, 1000);
    }

    return {
      get: function get() {
        return deferred.promise;
      }
    };
  })

  .controller('MainController', function($scope, GoogleClient) {
    $scope.title  = 'Loading...';
    $scope.loaded = false;

    GoogleClient.get().then(function loaded() {
      $scope.loaded = true;
    });
  });
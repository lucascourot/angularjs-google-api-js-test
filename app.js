angular.module('angularApp', [])
  
  .factory('GoogleClient', function($window, $q) {
    
    var deferred = $q.defer();

    window.handleClientLoad = function handleClientLoad() {
      deferred.resolve();
    }

    return {
      get: function get() {
        return deferred.promise;
      }
    };
  })

  .controller('MainController', function($scope, GoogleClient) {
    $scope.title  = 'Test';
    $scope.loaded = false;

    GoogleClient.get().then(function loaded() {
      $scope.loaded = true;
    });
  });

  window.handleClientLoad2 = function handleClientLoad2() {
    deferred.resolve();
  }
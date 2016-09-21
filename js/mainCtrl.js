angular.module('friendsList')
  .controller('mainCtrl', function($scope){
    $scope.friends = ['Joe', 'Justin', 'Perry'];
    $scope.newFriend = '';
    $scope.addFriend = function(name){
      $scope.friends.push(name);
    }
  });

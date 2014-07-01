angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope, $rootScope) {
        $rootScope.message1 = "Hello this is message one";
        $rootScope.message2 = "Connection timed out. Showing limited messages.";
        $rootScope.message3 = "It is getting late now " + new Date();
});

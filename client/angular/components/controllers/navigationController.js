angular.module("devStop")
  .controller('NavigationController', ['$scope', '$mdSidenav',
    function($scope, $mdSidenav) {
      // toggle sidenav
      $scope.openLeftMenu = function() {
        $mdSidenav('left').toggle();
      };
    }
  ]);

angular
  .module('devStop').controller('TechDetailsController', ['$scope',
    '$stateParams', '$meteor',
    function($scope, $stateParams, $meteor) {

      $scope.technology = $meteor.object(Technologies, $stateParams.technologyId,
        false).subscribe('technology');

    }
  ]);

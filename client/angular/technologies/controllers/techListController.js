angular
  .module('devStop').controller('TechListController', ['$scope', '$meteor',
    function($scope, $meteor) {

      $scope.technologies = $meteor.collection(function() {
        return Technologies.find();
      });

      $meteor.subscribe("technologies");
    }
  ]);

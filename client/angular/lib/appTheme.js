angular.module('devStop')
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('green')
      .accentPalette('blue');
  });

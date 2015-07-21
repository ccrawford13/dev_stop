angular.module('devStop')
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue', {
        'default': '600'
      })
      .accentPalette('green');
  });

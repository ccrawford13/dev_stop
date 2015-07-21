angular.module('devStop', ['angular-meteor', 'ui.router', 'ngMaterial'])
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue', {
        'default': '600'
      })
      .accentPalette('green');
  })

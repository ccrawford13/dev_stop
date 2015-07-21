angular.module('devStop', ['angular-meteor', 'ui.router', 'ngMaterial',
    'ui.router.title'
  ])
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue', {
        'default': '600'
      })
      .accentPalette('green');
  })

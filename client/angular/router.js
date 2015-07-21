angular.module('devStop')
  .config(['$urlRouterProvider', '$stateProvider',
    '$locationProvider',
    function($urlRouterProvider, $stateProvider, $locationProvider) {
      $locationProvider.html5Mode(true);

      $stateProvider
        .state('welcome', {
          url: '/',
          templateUrl: 'client/angular/welcome/welcome.ng.html',
          controller: 'WelcomeController',
          resolve: {
            $title: function() {
              return 'Welcome to devStop'
            }
          }
        })
        .state('explore', {
          url: '/explore',
          templateUrl: 'client/angular/explore/views/explore.ng.html',
          controller: 'ExploreController',
          resolve: {
            $title: function() {
              return 'Explore devStop'
            }
          }
        });

      $urlRouterProvider.otherwise('/');
    }
  ])

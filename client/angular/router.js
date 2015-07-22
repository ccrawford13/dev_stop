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
        })
        .state('technologies', {
          url: '/technologies',
          templateUrl: 'client/angular/technologies/views/technology-list.ng.html',
          controller: 'TechListController',
          resolve: {
            $title: function() {
              return 'Technology List'
            }
          }
        })
        .state('technologyDetails', {
          url: '/technologies/:technologyId',
          templateUrl: 'client/angular/technologies/views/technology-details.ng.html',
          controller: 'TechDetailsController',
          resolve: {
            $title: ['$meteor', '$stateParams',
              function($meteor, $stateParams) {
                // return tech by id and set name as title
                return $meteor.object(Technologies, $stateParams.technologyId)
                  .name;
              }
            ]
          }
        });

      $urlRouterProvider.otherwise('/');
    }
  ])

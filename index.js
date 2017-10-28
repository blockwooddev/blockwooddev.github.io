
var portfolioApp = angular.module('portfolioApp', ['ui.router']);

portfolioApp.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix(''); // by default '!'
  $locationProvider.html5Mode(true);
}]);

portfolioApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/',
            views: {
              '': {
                templateUrl: 'home.html',
                controller: function ($scope) {
                  not_home = false;
                  $scope.not_home = not_home;
                }
              },
              'about@home': {
                templateUrl: 'about.html'
              }
            }
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('contact', {
          url: '/contact',
          templateUrl: 'contact.html'
        })
        
        .state('resume', {
          url: '/resume',
          templateUrl: 'resume.html'
        })

        /*.state('home', {
          url: '/list',
          templateUrl: 'about.html',
          controller: function($scope) {
              $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
          }
        })*/
  
        // nested list with just some random string data
        .state('home.paragraph', {
          url: '/paragraph',
          template: 'I could sure use a drink right now.'
        });

});



portfolioApp.controller('portfolioController', function portfolioController($scope) {
  $scope.message = 'test';
  
  $scope.scotches = [
    {
      name: 'Macallan 12',
      price: 50
    },
    {
      name: 'Chivas Regal Royal Salute',
      price: 100
    },
    {
      name: 'Glenfiddich 1937',
      price: 2000
    },
  ];
  
  $scope.not_home = true;
});










//$('[data-toggle=collapse]').click(function(){
//	
//  	// toggle icon
//  	$(this).find("i").toggleClass("icon-angle-right icon-angle-down");
//  
//});
//
//$('.collapse').on('show', function (e) {
//  
//  	// hide open menus
//  	$('.collapse').each(function(){
//      if ($(this).hasClass('in')) {
//          $(this).collapse('toggle');
//      }
//    });
//  
//})
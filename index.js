
var portfolioApp = angular.module('portfolioApp', ['ui.router']);

portfolioApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            views: {
              '': {
                templateUrl: 'home.html'
              },
              'about@home': {
                templateUrl: 'about.html'
              }
            }
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
          url: '/about',
          views: {
            '': {
              templateUrl: 'about.html'
            },
            'columnOne@about': {
              template: 'look I am a column'
            },
            'columnTwo@about': {
              templateUrl: 'table-data.html',
              controller: 'portfolioController'
            }
          }      
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
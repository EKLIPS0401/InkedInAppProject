namespace inkedin {

  let app = angular.module('inkedin', ['ui.router', 'ngResource']);

  app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/views/home.html',
      controller: inkedin.controllers.HomeController,
      controllerAs: 'controller'
    })
    .state('404', {
      url: '/404',
      templateUrl: '/views/404.html'
    });

    $urlRouterProvider.otherwise('/404');

    $locationProvider.html5Mode(true);
  });

}

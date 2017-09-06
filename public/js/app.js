var app = angular.module('app', ['ui.router', 'ngResource']);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

  $stateProvider
    // Start of Navbar
    .state('home', {
      url: '/',
      templateUrl: '/views/home.html'
    })
    .state('style', {
      url: '/style',
      templateUrl: '/views/style.html',
    })
    .state('about', {
      url: '/about',
      templateUrl: '/views/about.html',
    })
    .state('login', {
      url: '/login',
      templateUrl: '/views/login.html'
    })
    .state('404', {
      url: '/you-don-fucked-up!',
      templateUrl: '/views/404.html'
    })
    .state('userProfile', {
      url: '/user/:id/posts',
      templateUrl: '/views/user.html'
    })
    // Start of Navbar
    // Start of style states
    .state('black-grey', {
      url: '/style/black-grey',
      templateUrl: '/views/style-list/black&grey.html'
    })
    .state('cartoon-anime', {
      url: '/style/cartoon-anime',
      templateUrl: '/views/style-list/cartoon-anime.html'
    })
    .state('cover-up', {
      url: '/style/cover-up',
      templateUrl: '/views/style-list/cover-up.html'
    })
    .state('flash-tattoo', {
      url: '/style/flash-tattoo',
      templateUrl: '/views/style-list/flash-tattoo.html'
    })
    .state('illustrative', {
      url: '/style/illustrative',
      templateUrl: '/views/style-list/illustrative.html'
    })
    .state('lettering', {
      url: '/style/lettering',
      templateUrl: '/views/style-list/lettering.html'
    })
    .state('new-school', {
      url: '/style/new-school',
      templateUrl: '/views/style-list/new-school.html'
    })
    .state('portrait', {
      url: '/style/portrait',
      templateUrl: '/views/style-list/portrait.html'
    })
    .state('realism', {
      url: '/style/realism',
      templateUrl: '/views/style-list/realism.html'
    })
    .state('sketch', {
      url: '/style/sketch',
      templateUrl: '/views/style-list/sketch.html'
    })
    .state('trad-american', {
      url: '/style/trad-american',
      templateUrl: '/views/style-list/trad-american.html'
    })
    .state('trad-japanese', {
      url: '/style/trad-japanese',
      templateUrl: '/views/style-list/trad-japanese.html'
    })
    .state('trash-polka', {
      url: '/style/trash-polka',
      templateUrl: '/views/style-list/trash-polka.html'
    })
    .state('tribal', {
      url: '/style/tribal',
      templateUrl: '/views/style-list/tribal.html'
    })
    .state('watercolor', {
      url: '/style/watercolor',
      templateUrl: '/views/style-list/watercolor.html'
    })
    .state('pinup', {
      url: '/style/pinup',
      templateUrl: '/views/style-list/pinup.html'
    })
    // End of style states
    // Start of Create acct
    .state('new-account', {
      url: '/login/new-account',
      templateUrl: '/views/Create-new/user-artist.html'
    })
    .state('artist-signup', {
      url: '/login/new-account/artist-signup',
      templateUrl: '/views/Create-new/artist-signup.html',
      controller: 'artSignCtrl'
    })
    .state('user-signup', {
      url: '/login/new-account/user-signup',
      templateUrl: '/views/Create-new/user-signup.html',
      controller: 'addClientCtrl'
    })
    // End of Create acct
    // Start of artist profile view
    .state('henry', {
      url: '/style/henry-watz',
      templateUrl: '/views/artist/henry-watz.html',
    })
  // End of artist profile view
  $urlRouterProvider.otherwise('/you-don-fucked-up!');

  $locationProvider.html5Mode(true);

});

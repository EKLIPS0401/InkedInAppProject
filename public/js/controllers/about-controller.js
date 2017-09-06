angular.module('app').controller('aboutController', function ($scope, $resource) {

  $scope.companyName = 'Steven\'s Tackle Shop';
  $scope.weather;
  $scope.betterment = [];
  $scope.services = [
    'Boats',
    'Tackle',
    'Fishing',
    'Bait',
    'Poles',
    'Lures',
    'Worms'
  ];
  $scope.styles = [
    'Black and Grey',
    'Cartoon/Anime',
    'Cover Up',
    'Flash Tattoo',
    'Illustrative',
    'Lettering',
    'New School',
    'Pin-Up',
    'Portrait',
    'Realism',
    'Sketch',
    'Traditional American',
    'Traditional Japanese',
    'Trash Polka',
    'Tribal',
    'Watercolor'

  ];

  $scope.addComplaint = function (complaint) {
    $scope.betterment.push(complaint);
  }



});
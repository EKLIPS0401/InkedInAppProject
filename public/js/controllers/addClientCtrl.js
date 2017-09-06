angular.module('app')
    .controller('ClientCtrl', function (Clients, $scope) {

        $scope.addClient = function () {
            var client = {
                firstName = $scope.fName,
                lastName = $scope.lName,
                email = $scope.email,
                userName = $scope.uName,
                password = $scope.PWD
            }

        }
    });

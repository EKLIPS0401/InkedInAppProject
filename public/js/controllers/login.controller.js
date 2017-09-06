app.controller('LoginCtrl',
    ['$scope', '$location', 'Login', 'setCreds',
        function LoginCtrl($scope, $location, Login, setCreds) {
            $scope.submit = function () {
                $scope.sub = true;
                var postData = {
                    "username": $scope.username,
                    "password": $scope.password
                };
                Login.login({}, postData,
                    function success(response) {
                        console.log("Success:" + JSON.stringify(response));
                        if (response.authenticated) {
                            setCreds($scope.username, $scope.password)
                            $location.path('/');
                        } else {
                            $scope.error = "Login Failed"
                        }
                    },
                    function error(errorResponse) {
                        console.log("Error:" + JSON.stringify(errorResponse));
                    }
                );
            };
        }]);
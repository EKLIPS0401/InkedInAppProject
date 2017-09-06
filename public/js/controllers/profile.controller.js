angular.module('app')
    .controller('profileController', function ($scope, profileService) {

        $scope.editIndex = -1;
        $scope.profileObject = {
            firstName: '',
            lastName: '',
            email: '',
            address: '',
            city: '',
            state: '',
            zipcode: '',
            businessType: '',
            businessName: '',
            phoneNumber: '',
            pricing: '',
            style: '',
            bio: ''
        };
        $scope.profileArray = profileService.getInfoArray();
        $scope.editingPerson = function (personIndex) {
            $scope.editObject = angular.copy($scope.employeeArray[personIndex]);
            $scope.editIndex = personIndex;
        };

        $scope.cancelEdit = function () {
            $scope.editIndex = -1;
        };

        $scope.saveEdit = function (personIndex) {
            profileService.updateInfo(personIndex, $scope.editObject);
            $scope.editIndex = -1;
        }

    });

angular.module('app')
    .service('profileService', function () {
        var infoArray = [
            {
                firstName: 'Henry',
                lastName: 'Watz',
                email: 'henry.watz@gmail.com',
                address: 'N/A',
                city: 'Phoenix',
                state: 'AZ',
                zipcode: '85006',
                businessType: 'Shop',
                businessName: 'GoldenRule Tattoo',
                phoneNumber: '480.555.1955',
                pricing: 'N/A',
                style: 'Based On Design',
                bio: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage and going through the cites of the word in classical literature, discovered the undoubtable source.Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
            }
        ];

        this.getInfoArray = function () {
            return infoArray;

        };
        this.updateInfo = function (personIndex, obj) {
            infoArray.splice(personIndex, 1, obj)
        }

    });
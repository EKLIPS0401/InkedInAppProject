namespace inkedin.services {

  export class UserService {
    private USER_RESOURCE = this.$resource('/api/v1/users/:id');

    static $inject = ['$resource'];

    constructor(private $resource) {}

    public getUsers() {
      return this.USER_RESOURCE.query();
    }

    public getUserById(userId) {
      return this.USER_RESOURCE.get({ id: userId });
    }

    public saveUser(newUser) {
      return this.USER_RESOURCE.save(newUser).$promise;
    }

    public deleteUser(userId) {
      return this.USER_RESOURCE.remove({ id: userId }).$promise;
    }
  }

  angular.module('inkedin').service('userService', UserService);

}

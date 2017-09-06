var clientSrv = angular.module('clientSrv', ['ngResource']);
clientSrv.factory('Clients', ['$resource',
    function ($resource) {
        return $resource('/api/clients/:id', { id: '@_id' }, {
            query: { method: "GET", isArray: true },
            create: { method: "POST" },
            get: { method: "GET" },
            remove: { method: "DELETE" },
            update: { method: "PUT" }
        });

        RESOURCE = $resource('/api/clients');
        getClient(id) {
            return this.RESOURCE.get({ id: id });
        };
        saveClient(client) {
            return this.RESOURCE.save(client).$promise;
            ;
        }
    }]);
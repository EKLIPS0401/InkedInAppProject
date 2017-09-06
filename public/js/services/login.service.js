app.factory('Login', function ($resource) {
    return $resource('', {}, {
        login: {
            method: 'POST', cache: false, isArray: false
        }
    });
});
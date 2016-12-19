app.factory('sessionFactory', function($http, $location){
    let factory = {};
    factory.login = function(user){
        $http.post('/login', user).then(function(output){
            $location.url('/dash');
        });
    }
    factory.curUser = function(cb){
        $http.get('/curUser').then(function(output){
            cb(output.data);
        })
    }
    return factory;
})

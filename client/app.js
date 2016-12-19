const app = angular.module('app', ['ngRoute']);


app.config(function($routeProvider){
    $routeProvider
    .when('/login',{
        templateUrl:'partials/login.html',
        controller: 'sessionController'
    })
    .when('/dash',{
        templateUrl:'partials/dash.html'
    })
    .when('/addQuestion',{
        templateUrl:'partials/addQuestion.html'
    })
    .when('/addAnswer/:id',{
        templateUrl:'partials/addAnswer.html'
    })
    .when('/showQuestion/:id',{
        templateUrl:'partials/showQuestion.html'
    })
    .otherwise({
        redirectTo:'/login'
    })
})


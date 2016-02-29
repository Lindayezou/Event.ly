var app = angular.module('Evently',[
  'ngRoute',
  'Evently.List',
  'Evently.Add',
  'Evently.Services',
  'Evently.Delete',
  'Evently.Auth',
  'Evently.AuthServices'
  ]);

app.config(function($routeProvider) {
  $routeProvider //homepage
  .when('/', {
    templateUrl:'../views/newEvent.html',
    controller:'EntryController'
  })
  .when('/newEvent',{
    templateUrl:'../views/newEvent.html',
    controller:'EntryController'
  })
  .when('/listEvents',{
    templateUrl:'../views/listEvents.html',
    controller:'EventListController'
  })
  .when('/deleteEvent', {
    templateUrl:'../views/deleteEvent.html',
    controller:'DeleteController'
  })
  .when('/signup', {
    templateUrl:'../views/signup.html',
    controller:'AuthController'
  })
  .when('/login', {
    templateUrl:'../views/signup.html',
    controller:'AuthController'
  })
  .otherwise({
    redirectTo: 'index.html'
  });
});
var app = angular.module('movieSearch', ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
    // .when('/', {
    //
    //   controller: "HomeController"
    // })
    .when('/:search', {
      templateUrl: "partials/results.html",
      controller: "SearchController"
    })
    .when('/:id/show', {
      templateUrl: 'partials/details.html',
      controller: "DetailsController"
    })
});

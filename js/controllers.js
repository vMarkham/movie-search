app.controller('HomeController', function($scope, $http, $route, $location) {
  $scope.view = {};
  $scope.view.searchInput = "";
  $scope.view.goSearch = function () {
    $location.url('/'+ $scope.view.searchInput)
  }
})

app.controller('SearchController', function($scope, $http, $route, $routeParams, $location) {
  $scope.view = {};
  $scope.view.movies = {};
  $http.get('http://www.omdbapi.com/?s=' + $route.current.params.search)
    .then( function(response) {
      $scope.view.movies = response.data.Search;
    },
    function(response) {
      console.log('API is totes broken')
    })
  $scope.view.goDetails = function(imdbId) {
    $location.url('/' + imdbId + '/show')
  }
})

app.controller('DetailsController', function($scope, $http, $route) {
  $scope.view = {};
  $scope.view.movie = {};
  $http.get('http://www.omdbapi.com/?i=' + $route.current.params.id)
    .then( function(response) {
      $scope.view.movie = response.data;
    },
    function(response) {
      console.log('API is totes broken');
    })
})

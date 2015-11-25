var app = angular.module('weatherApp', []);

app.controller('WeatherClassController', function ($scope, $http) {
    $scope.city = "Tijuana,MX";
    
    $scope.loadWeather = function () {
        var url = "http:api.openweathermap.org/data/2.5/forecast?q={0}&mode=json&appid={1}".format($scope.city, appid);
            
        $http.get(url)
            .success(function (response) {
            $scope.data = response;
        })
        .error(function(response){
            $scope.errores=response;
        })
    }
});
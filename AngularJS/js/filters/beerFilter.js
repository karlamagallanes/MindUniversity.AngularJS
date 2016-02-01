
app.filter("beerFilter", function () {
    return function (data, beerType, beerBrand) {
        if(beerType === undefined) {
            return data;
        }
        var filteredData = [];

        angular.forEach(data, function (beer) {
            if ((beer.BeerType == beerType || beerType == "All")) {
                filteredData.push(beer);
            }
        });
        return filteredData;
    };
});
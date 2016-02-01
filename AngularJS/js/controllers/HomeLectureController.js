app.controller('HomeLectureController', function ($scope) {
    
        $scope.showFilters = false;
        $scope.showOrHideText = "Show Filters"
        $scope.selectedBeerType = "All";
        $scope.selectedBeerBrand = "All";
 
        $scope.showOrHideFilters = function () {
                $scope.showFilters = !$scope.showFilters;
                $scope.showOrHideText = ($scope.showFilters ? "Hide " : "Show ") + "Filters";
        }
 
        $scope.setBeerType = function (beerType) {            
                $scope.selectedBeerType = beerType;
        };
 
        $scope.setBeerBrand = function (beerBrand) {
                $scope.selectedBeerBrand = beerBrand;
        };
 
        $scope.beers = [
                {
                        Id: 1,
                        BeerType: "Stout",
                        ABV: 8.5,
                        Brand: "Calafia",
                        Name: "Imperial Corpus Stout",
                        Image: "",
                        Description: "Thick bold beer with notes of oak, coffee and cocoa. High level of alcohol and complex favors.",
                        Reviews: ["Review 1", "Review 2", "Review 3", "Review 4"]
                },
                {
                        Id: 2,
                        BeerType: "Stout",
                        ABV: 7.5,
                        Brand: "Karl Strauss",
                        Name: "Wreck Alley",
                        Image: "",
                        Description: "Chocolate/cocoa is the main flavor. Rick roasted malts. A very very tiny bit of booziness. Extremely delicious. Has a delicious flavor, without any flaws.",
                        Reviews: ["Review 1", "Review 2", "Review 3", "Review 4"]
                },
                {
                        Id: 3,
                        BeerType: "Red Ale",
                        ABV: 5.5,
                        Brand: "Calafia",
                        Name: "Red Sunset",
                        Image: "",
                        Description: "Malty and caramel taste. Well balanced irish beer",
                        Reviews: ["Review 1", "Review 2", "Review 3", "Review 4"]
                },
                {
                        Id: 4,
                        BeerType: "Red Ale",
                        ABV: 5.0,
                        Brand: "Karl Strauss",
                        Name: "Red Trolley",
                        Image: "",
                        Description: "We brew it with a half ton of caramelized malts for a rich copper color and toffee flavor. After adding the perfect mix of hops for balance, we warm ferment the beer to bring out a hint of dried raisins and currants. The complexity of flavors makes Red Trolley Ale a hearty and truly enjoyable beer",
                        Reviews: ["Review 1", "Review 2", "Review 3", "Review 4"]
                },
                {
                        Id: 5,
                        BeerType: "Red Ale",
                        ABV: 6.0,
                        Brand: "Stone",
                        Name: "Runation",
                        Image: "",
                        Description: "Stone Ruination IPA was the first full-time brewed and bottled West Coast double IPA on the planet. As craft beer has evolved over the years, so too have techniques for maximizing hop flavors and aromas.",
                        Reviews: ["Review 1", "Review 2", "Review 3", "Review 4"]
                },
                {
                        Id: 6,
                        BeerType: "IPA",
                        ABV: 7.4,
                        Brand: "Calafia",
                        Name: "",
                        Image: "",
                        Description: "This exquisite liquid patchwork of more than a dozen hops is a devastatingly fresh double IPA. Freshness is a key component of many beers—especially big, hoppy IPAs—but we've taken it further, a lot further, with this one. We brewed this IPA specifically NOT to last.",
                        Reviews: ["Review 1", "Review 2", "Review 3", "Review 4"]
                },
                {
                        Id: 7,
                        BeerType: "IPA",
                        ABV: 4.9,
                        Brand: "Karl Strauss",
                        Name: "",
                        Image: "",
                        Description: "This exquisite liquid patchwork of more than a dozen hops is a devastatingly fresh double IPA. Freshness is a key component of many beers—especially big, hoppy IPAs—but we've taken it further, a lot further, with this one. We brewed this IPA specifically NOT to last.",
                        Reviews: ["Review 1", "Review 2", "Review 3", "Review 4"]
                },
                {
                        Id: 8,
                        BeerType: "IPA",
                        ABV: 5.8,
                        Brand: "Stone",
                        Name: "Delicious",
                        Image: "",
                        Description: "While our beers are many and diverse, yet unified by overarching boldness, India pale ales are our undeniable bread and butter. The result is an intensely citrusy, beautifully bitter beer is worthy of the simple-yet-lordly title of Stone Delicious IPA",
                        Reviews: ["Review 1", "Review 2", "Review 3", "Review 4"]
                },
                {
                        Id: 9,
                        BeerType: "IPA",
                        ABV: 6.2,
                        Brand: "Stone",
                        Name: "Enjoy By",
                        Image: "",
                        Description: "This exquisite liquid patchwork of more than a dozen hops is a devastatingly fresh double IPA. Freshness is a key component of many beers—especially big, hoppy IPAs—but we've taken it further, a lot further, with this one. We brewed this IPA specifically NOT to last.",
                        Reviews: ["Review 1", "Review 2", "Review 3", "Review 4"]
                },
                {
                        Id: 10,
                        BeerType: "IPA",
                        ABV: 5.5,
                        Brand: "Ballast Point",
                        Name: "Big Eye",
                        Image: "",
                        Description: "This exquisite liquid patchwork of more than a dozen hops is a devastatingly fresh double IPA. Freshness is a key component of many beers—especially big, hoppy IPAs—but we've taken it further, a lot further, with this one. We brewed this IPA specifically NOT to last.",
                        Reviews: ["Review 1", "Review 2", "Review 3", "Review 4"]
                },
                {
                        Id: 11,
                        BeerType: "Golden Ale",
                        ABV: 4.2,
                        Brand: "Calafia",
                        Name: "California",
                        Image: "",
                        Description: "Our Black Marlin Porter stands out in a town known primarily for its IPA’s. We craft it from a unique blend of roasted and crystallized malts that give it a smooth, chocolaty, caramel profile. Then toss in a healthy dose of American hops to serve up full-bodied flavor worthy of its San Diego roots.",
                        Reviews: ["Review 1", "Review 2", "Review 3", "Review 4"]
                },
                {
                        Id: 12,
                        BeerType: "Golden Ale",
                        ABV: 4.6,
                        Brand: "Ballast Point",
                        Name: "Original",
                        Image: "",
                        Description: "Our Black Marlin Porter stands out in a town known primarily for its IPA’s. We craft it from a unique blend of roasted and crystallized malts that give it a smooth, chocolaty, caramel profile. Then toss in a healthy dose of American hops to serve up full-bodied flavor worthy of its San Diego roots.",
                        Reviews: ["Review 1", "Review 2", "Review 3", "Review 4"]
                },
                {
                        Id: 13,
                        BeerType: "Brown Ale",
                        ABV: 5.9,
                        Brand: "Calafia",
                        Name: "Charlie Brown Ale",
                        Image: "",
                        Description: "Our Black Marlin Porter stands out in a town known primarily for its IPA’s. We craft it from a unique blend of roasted and crystallized malts that give it a smooth, chocolaty, caramel profile. Then toss in a healthy dose of American hops to serve up full-bodied flavor worthy of its San Diego roots.",
                        Reviews: ["Review 1", "Review 2", "Review 3", "Review 4"]
                },
                {
                        Id: 14,
                        BeerType: "Brown Ale",
                        ABV: 6.8,
                        Brand: "Karl Strauss",
                        Name: "Karl Brown Ale",
                        Image: "",
                        Description: "Our Black Marlin Porter stands out in a town known primarily for its IPA’s. We craft it from a unique blend of roasted and crystallized malts that give it a smooth, chocolaty, caramel profile. Then toss in a healthy dose of American hops to serve up full-bodied flavor worthy of its San Diego roots.",
                        Reviews: []
                },
                {
                        Id: 15,
                        BeerType: "Brown Ale",
                        ABV: 6.2,
                        Brand: "Insurgente",
                        Name: "Brown",
                        Image: "",
                        Description: "Our Black Marlin Porter stands out in a town known primarily for its IPA’s. We craft it from a unique blend of roasted and crystallized malts that give it a smooth, chocolaty, caramel profile. Then toss in a healthy dose of American hops to serve up full-bodied flavor worthy of its San Diego roots.",
                        Reviews: []
                },
                {
                        Id: 16,
                        BeerType: "Pale Ale",
                        ABV: 5.0,
                        Brand: "Calafia",
                        Name: "Calafiero Pale Ale",
                        Image: "",
                        Description: "This decidedly American West Coast pale ale represents the next chapter in our brewing story. Showcasing the full essence of vivid Mandarina Bavaria hops plucked from the storied fields of Germany, it presents bright flavors of peach and orange against a crisp, spicy, biscuity backdrop. We’re glad you’re with us on this journey!",
                        Reviews: []
                },
                {
                        Id: 17,
                        BeerType: "Saison",
                        ABV: 6.0,
                        Brand: "Insurgente",
                        Name: "Saison",
                        Image: "",
                        Description: "Our Black Marlin Porter stands out in a town known primarily for its IPA’s. We craft it from a unique blend of roasted and crystallized malts that give it a smooth, chocolaty, caramel profile. Then toss in a healthy dose of American hops to serve up full-bodied flavor worthy of its San Diego roots.",
                        Reviews: []
                },
                {
                        Id: 18,
                        BeerType: "Saison",
                        ABV: 6.0,
                        Brand: "Stone",
                        Name: "Cali Belq",
                        Image: "",
                        Description: "Our Black Marlin Porter stands out in a town known primarily for its IPA’s. We craft it from a unique blend of roasted and crystallized malts that give it a smooth, chocolaty, caramel profile. Then toss in a healthy dose of American hops to serve up full-bodied flavor worthy of its San Diego roots.",
                        Reviews: []
                }
        ];
});
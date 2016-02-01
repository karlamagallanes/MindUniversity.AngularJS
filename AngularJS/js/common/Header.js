var appid = "2de143494c0b295cca9337e1e96b00e0";
 
 
var app = angular.module('beerStoreApp', ["angular.filter"]);

if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) {
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
}
 
 
if (!String.prototype.contains) {
    String.prototype.contains = function(str) {
      return this.toUpperCase().indexOf(str.toUpperCase()) >= 0;
    };
}
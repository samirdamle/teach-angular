angular.module('app').filter('ageThirtyPlus', function() {
    return function(input) {
        return input > 30;
    }

});
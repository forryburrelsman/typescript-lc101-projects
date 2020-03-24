"use strict";
exports.__esModule = true;
var SpaceLocation = /** @class */ (function () {
    function SpaceLocation(name, kilometersAway) {
        this.name = name;
        this.kilometersAway = kilometersAway;
    }
    SpaceLocation.prototype.printDaysToLocation = function (location) {
        console.log(this.name + " would take " + this.getDaysToLocation(location.kilometersAway) + " days to get to " + location.name + ".");
    };
    SpaceLocation.prototype.getDaysToLocation = function (kilometersAway) {
        var milesAway = kilometersAway * this.milesPerKilometer;
        var hoursToLocation = milesAway / this.speedMph;
        var daysToLocation = hoursToLocation / 24;
        return daysToLocation;
    };
    return SpaceLocation;
}());
exports.SpaceLocation = SpaceLocation;

"use strict";
exports.__esModule = true;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var total = 0;
        for (var i = 0; i < items.length; i++) {
            total += items[i].massKg;
        }
        return total;
    };
    Rocket.prototype.currentMassKg = function () {
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
    };
    Rocket.prototype.canAdd = function (item) {
        return (this.currentMassKg() + item.massKg <= this.totalCapacityKg);
    };
    Rocket.prototype.addCargo = function (Cargo) {
        if (this.canAdd(Cargo)) {
            this.cargoItems.push(Cargo);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (Astronaut) {
        if (this.canAdd(Astronaut)) {
            this.astronauts.push(Astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;

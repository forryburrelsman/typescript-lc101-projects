import {Payload} from "./Payload";
import {Astronaut} from "./Astronaut";
import {Cargo} from "./Cargo";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass(items: Payload[]) : number {
        let total: number = 0;
        for (let i = 0; i < items.length; i++) {
            total+=items[i].massKg;
        }
        return total;
    }

    currentMassKg() : number{
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts)
    }

    canAdd(item: Payload):boolean{
        return (this.currentMassKg() + item.massKg <= this.totalCapacityKg) 
    }

    addCargo(Cargo: Cargo):boolean {
        if (this.canAdd(Cargo)) {
            this.cargoItems.push(Cargo);
            return true;
        } else {
            return false;
        }
    }

    addAstronaut(Astronaut: Astronaut): boolean {
        if (this.canAdd(Astronaut)) {
            this.astronauts.push(Astronaut);
            return true;
        } else {
            return false;
        }
    }


    }
    
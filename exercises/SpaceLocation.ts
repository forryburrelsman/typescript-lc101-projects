// Paste in the provided code here:
import { Spacecraft } from './parts1-5';
export class SpaceLocation {
    kilometersAway: number;
    name: string;
 
    constructor(name: string, kilometersAway: number) {
       this.name = name;
       this.kilometersAway = kilometersAway;
    }
    printDaysToLocation(location: SpaceLocation) {
        console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
     }
     getDaysToLocation(this: any, kilometersAway: number) : number {
        let milesAway: number = kilometersAway * this.milesPerKilometer;
        let hoursToLocation: number = milesAway / this.speedMph;
        let daysToLocation: number = hoursToLocation / 24
        return daysToLocation
    }
 }
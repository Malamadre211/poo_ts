import { Car } from "./Car";
import { Conducteur } from "./Conducteur";

const carPetite = new Car ('red', 22);
const carNew = new Car ('black', 100);

console.log(`Condition new car : ${carNew.condition}, condition small car : ${carPetite.condition}.`)

const Thomas = new Conducteur('La Forge', 'Thomas', [carPetite, carNew])

Thomas.direBonjour();
Thomas.crash(0); //é thomas che crash e crash anche la macchina
Thomas.crash(1);
Thomas.crash(1);

console.log(`Condition new car after 2 crash: ${carNew.condition}.`);
console.log(`Condition small car after crash: ${carPetite.condition}.`);

console.log(`Color new car: ${carNew.color}.`)
console.log(`Color small car: ${carPetite.color}.`)
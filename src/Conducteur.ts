import { Car } from "./Car";

export class Conducteur {

    public nom: string;
    public prenom: string;
    public voitures : Car[];
  
    constructor(nom: string, prenom: string, voitures : Car[]) {
        this.nom = nom;
        this.prenom = prenom;
        this.voitures = voitures;
    }

    public direBonjour(): void {
        console.log(`Hello ${this.prenom}`);
    }

    public crash(carIndex:number) {
        this.voitures[carIndex].crash()
    }
  }

import { Armes } from "./Armes";

export class Vikings {

    public name: string;
    public life: number;
    public force: number;
    public arme: Armes[];
  
    constructor(name: string, life: number, force: number, arme: Armes[]) {
        this.name = name;
        this.life = life;
        this.force = force;
        this.arme = arme;
    }
  }
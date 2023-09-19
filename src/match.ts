import { Equipe } from "./equipe";

export class Match {

    public equipe: Equipe[];
  
    constructor(equipe : Equipe[]) {
        this.equipe = equipe;
    }
  }
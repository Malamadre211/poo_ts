import { Joueur } from "./Joueur";

export class Equipe {

    public joueurs: Joueur[];
  
    constructor(joueurs : Joueur[]) {
        this.joueurs = joueurs;
    }
  }
import { Joueur } from "./Joueur";

export class Equipe {

    public joueurs: Joueur[];
    public points : number;
  
    constructor(joueurs : Joueur[], points : number) {
        this.joueurs = joueurs;
        this.points = points;
    }
  }
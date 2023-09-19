import { Match } from "./Match";
import { Equipe } from "./Equipe";

export class Tournoi {

    public equipe: Equipe[]
    public result : Equipe[]
  
    constructor(equipe : Equipe[], result : Equipe[] = []) {
        this.equipe = equipe
        this.result = result 
    }

    public simulate() {
        const match1 = new Match([this.equipe[0], this.equipe[1]])
        const match2 = new Match([this.equipe[2], this.equipe[3]])
        const matchFinal = new Match([match1.TeamWin(), match2.TeamWin()])
    }
}
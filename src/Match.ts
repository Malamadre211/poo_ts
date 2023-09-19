import { Equipe } from "./Equipe";

export class Match {

    public equipe: Equipe[];
    public score : number[];
  
    constructor(equipe : Equipe[], score : number[] = [0,0]) {
        this.equipe = equipe;
        this.score = score;
    }

    simulate(){
        this.score[0]=20
        this.score[1]=12
    }

    public TeamWin(){
        if (this.score[0] > this.score[1]) {
            return this.equipe[0]
        }
        else {
            return this.equipe[1]
        }
        
    }
}
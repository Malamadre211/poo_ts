import { Equipe } from "./Equipe";

export class Match {

    public equipe: Equipe[];
    public score : number[];
  
    constructor(equipe : Equipe[], score : number[] = [0,0]) {
        this.equipe = equipe;
        this.score = score;
    }

    public TeamWin(){
        while (this.equipe[0].points <20 && this.equipe[1].points <20) {
        let randomWin = Math.floor(Math.random()*2)
        if (randomWin == 0) {
            this.equipe[0].points += 1
            if (this.equipe[0].points ==20) {
                console.log("L'equipe 1 gnagne !")
            }
        } else if (randomWin == 0) {
            this.equipe[1].points += 1
            if (this.equipe[1].points == 20) {
                console.log("L'equipe 2 gnagne !")
            }
        } 

        
    }
    }
}
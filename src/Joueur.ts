

export class Joueur {

    public nom: string;
    public prenom: string;
    public age : number;
    public static nbJoueur: number = 0;
  
    constructor(nom: string, prenom: string, age: number) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        Joueur.nbJoueur++;
    }
    }
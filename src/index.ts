import { Car } from "./Car";
import { Conducteur } from "./Conducteur";
import { Joueur } from "./Joueur";
import { Equipe } from "./equipe";
import { Match } from "./match";

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

    const joueur1 = new Joueur ('Durant', 'Kevin', 37)
    const joueur2 = new Joueur ('Wembi', 'Victor', 19)
    const joueur3 = new Joueur ('Durant', 'Mat', 25)
    const joueur4 = new Joueur ('Wembi', 'Kevin', 32)

    const equipe1 = new Equipe ([joueur1,joueur2])
    const equipe2 = new Equipe ([joueur3,joueur4])
    const equipe3 = new Equipe ([joueur1,joueur2])
    const equipe4 = new Equipe ([joueur3,joueur4])

    console.log(`Nombre de joueurs: ${(Joueur.nbJoueur)}.`);

    const match1 = new Match ([equipe1,equipe2])

    console.log(match1)

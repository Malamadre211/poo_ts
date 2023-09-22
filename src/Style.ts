import { ClassCollection } from "./Class";


export interface Style {
    [propriete: string]: string
}

export class ElementSimplon {
    private nomBalise: string
    public innerText: string
    public classList: ClassCollection
    public style: Style

    constructor(nomBalise: string) {
        this.nomBalise = nomBalise
        this.innerText = ''
        this.classList = new ClassCollection()
        this.style = {}
    }

    ajouterClasse(classe: string) {
        this.classList.add(classe)
    }

    supprimerClasse(classe: string) {
        this.classList.remove(classe)
    }

    ajouterContenu(contenu: string) {
        this.innerText = contenu
    }

    supprimerContenu() {
        this.innerText = ''
    }

    getStyle(): string {
        let style = ''
        for(const propriete in this.style) {
            style += `${propriete}: ${this.style[propriete]};`
        }
        if(style !== '') {
            style = ` style="${style}"`
        }
        return style
    }

    appendChild(element: ElementSimplon) {
        this.innerText = element.toHTML()
    }

    toHTML(): string {
        return `<${this.nomBalise}${this.classList.toString()}${this.getStyle()}>${this.innerText}</${this.nomBalise}>`
    }
}
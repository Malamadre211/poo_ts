export class ClassCollection {

    private classes: string[]

    constructor() {
        this.classes = []
    }

    public add(classe: string) {
        this.classes.push(classe)
    }

    public remove(classe: string) {
        this.classes = this.classes.filter(classeCourante => classeCourante !== classe)
    }

    toString(): string {
        return ` class="${this.classes.join(' ')}"`
    }
}
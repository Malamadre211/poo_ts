export class Car {

    private _color: string;
    public condition: number;
  
    constructor(color: string, condition: number) {
        this._color = color;
        this.condition = condition;
    }
  
    public crash() : void {
      this.condition = this.condition *0.8
    }

    public get color(): string {
      return this._color;
  }
  }
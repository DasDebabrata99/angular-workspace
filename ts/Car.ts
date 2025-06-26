function comp(target:any){
    console.log(target);
}

@comp
export class Car{
    color: string;
    year: number;

    constructor(color:string, year:number){
        this.color = color;
        this.year = 2000;
    }
    drive(){
        console.log('vroom!')
    }
}
const c = new Car('red',2016);
console.log(c.color);
c.drive();
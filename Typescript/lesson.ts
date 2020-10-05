import {Student} from "./Student"

let stu=new Student();
let num:any=5;
num="test";
num=true
num=5
// console.log(num)

let n:number=5;
n=5.9;

let word:string="P116";
// console.log(word)

let isAviable:boolean;
isAviable=true;

let test:void=undefined;

let numArr:number[]=[10,20,30,40];

let words:Array<string>=["Salam","Hello","Hi"];

let tuple1:[number,string,string]=[1,"Orxan","Memmedli"];

enum Color{Red=0,Green,Blue};

let reng1:Color=Color.Blue

// console.log(reng1)

let uType:string|Color;
uType="Orxan";
uType=Color.Red

function Hello(str:string):void{
    console.log(str)
}

// Hello("Salam")

let hello=function(str:string):void{
    console.log(str)
}

// hello("Salam")

function Sum(x:number,y:number=5):void{
    console.log(x+y)
}

// Sum(10);

function Sum1(x:number,y?:number):void{
    if(y){
        console.log(x+y)
    }else{
        console.log(x)
    }
}

// Sum1(14,6);

function CustomJoin(name:string,...arr:string[]):string{
    return arr.join(",")+","+name;
}

// console.log(CustomJoin("Orxan","Hesen","Zaur"))

class Human{
    public name:string
    surname:string
    age:number
    private generation:string
    readonly weight:number
    constructor(name:string,surname:string,age:number) {
        this.name=name
        this.surname=surname
        this.age=age
        this.weight=30
    }

    //encapsulation
    // get Generation():string{
    //     return this.generation;
    // }

    // set Generation(str:string){
    //     this.generation=str;
    // }

    Info():void{
        
        this.generation="Xan"
        console.log(`${this.name} ${this.surname} ${this.age} ${this.generation}`)
    }
}

// let h=new Human("Orxan","Memmedli",30)
// h.Info();

// let h1=new Human();
// h1.name="Orxan"
// h1.surname="Memmedli"
// h1.age=30
// h1.Info()

abstract class Animal {
    constructor() {
        console.log("Animal was born")
    }

    abstract test():void;
}

class Eagle extends Animal {
    test(): void {
        console.log("test method");
    }
    constructor() {
        super();
    }
    eagleTest():void{
        console.log("eagle test")
    }
}

let eagle:Animal=new Eagle();
// eagle.test();

function GenericFunc<T extends number|string>(x:T):void{
    console.log(x)
}

GenericFunc<number>(5);

class  GenericC<T> {
    variable:T
    constructor(x:T) {
        this.variable=x
    }
}

let genc=new GenericC<number>(6);

interface ICan{
    // name:string
    // surname:string
    test():void
}

interface ICan1{

}

class  Person implements ICan,ICan1 {
    constructor(parameters) {
        
    }
    test(): void {
        throw new Error("Method not implemented.");
    }
}
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var num = 5;
num = "test";
num = true;
num = 5;
// console.log(num)
var n = 5;
n = 5.9;
var word = "P116";
// console.log(word)
var isAviable;
isAviable = true;
var test = undefined;
var numArr = [10, 20, 30, 40];
var words = ["Salam", "Hello", "Hi"];
var tuple1 = [1, "Orxan", "Memmedli"];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var reng1 = Color.Blue;
// console.log(reng1)
var uType;
uType = "Orxan";
uType = Color.Red;
function Hello(str) {
    console.log(str);
}
// Hello("Salam")
var hello = function (str) {
    console.log(str);
};
// hello("Salam")
function Sum(x, y) {
    if (y === void 0) { y = 5; }
    console.log(x + y);
}
// Sum(10);
function Sum1(x, y) {
    if (y) {
        console.log(x + y);
    }
    else {
        console.log(x);
    }
}
// Sum1(14,6);
function CustomJoin(name) {
    var arr = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arr[_i - 1] = arguments[_i];
    }
    return arr.join(",") + "," + name;
}
// console.log(CustomJoin("Orxan","Hesen","Zaur"))
var Human = /** @class */ (function () {
    function Human(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.weight = 30;
    }
    //encapsulation
    // get Generation():string{
    //     return this.generation;
    // }
    // set Generation(str:string){
    //     this.generation=str;
    // }
    Human.prototype.Info = function () {
        this.generation = "Xan";
        console.log(this.name + " " + this.surname + " " + this.age + " " + this.generation);
    };
    return Human;
}());
// let h=new Human("Orxan","Memmedli",30)
// h.Info();
// let h1=new Human();
// h1.name="Orxan"
// h1.surname="Memmedli"
// h1.age=30
// h1.Info()
var Animal = /** @class */ (function () {
    function Animal() {
        console.log("Animal was born");
    }
    return Animal;
}());
var Eagle = /** @class */ (function (_super) {
    __extends(Eagle, _super);
    function Eagle() {
        return _super.call(this) || this;
    }
    Eagle.prototype.test = function () {
        console.log("test method");
    };
    Eagle.prototype.eagleTest = function () {
        console.log("eagle test");
    };
    return Eagle;
}(Animal));
var eagle = new Eagle();
// eagle.test();
function GenericFunc(x) {
    console.log(x);
}
GenericFunc(5);
var GenericC = /** @class */ (function () {
    function GenericC(x) {
        this.variable = x;
    }
    return GenericC;
}());
var genc = new GenericC(6);

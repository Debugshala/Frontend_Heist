// there are three way to declare a variable in JavaScript
// let    |   var    |    const

// var num = 42;
// console.log(num);
// num = 135;
// console.log(num);


// let num = 96;
// console.log(num);
// num = 21;
// console.log(num);


// const num = 35;
// console.log(num);
// num = 87;
// console.log(num);


// declaration & assignment     |     Versioning        |       Scoping  : var - function scoped
// let & const : braces scoped

// function iteration(){
//     for(const num = 1; num<=10; num++){
//         console.log(num);
//     }
//     console.log(num);
// }

// iteration();


// Operators : 
// 1.  Airthmetic op : +, -, *, /, **, %

// 2. Assignment op : +=, -=, *=, /=, %=, **=, =

// let vari1 = 85;
// let vari2 = 8;
// console.log(vari1);
// console.log(vari2);

// vari2 **= 3;

// console.log(vari1);
// console.log(vari2);


// 3. Comparison Op : ==, ===, >, <, >=, <=, !=, !==

// let vari1 = 85;
// let vari2 = "85";

// console.log(vari1 !== vari2);


// logical operator : &&, ||, !

// let num1  = 63;
// let num2 = 89;
// let num3 = 55;

// console.log(!(num1 < num2 && num2 > num3));



// conditional statements : 

// if / else / else if : 

// let num1 = 20.02;
// let num2 = "JavaScript";

// if(num2 > num1){
//     console.log("num2 is greater than num1");
// }
// else{
//     console.log("num1 is greater than num2");
// }



// Switch Statement : 

let day = 8;

switch (day){
    case 1:
        console.log("it's Monday");
        break;
    case 2: 
        console.log("it's Tuesday");
        break;
    case 3:
        console.log("it's Wednesday");
        break;
    case 4:
        console.log("it's thursday");
        break;
    case 5:
        console.log("it's friday");
        break;
    case 6:
        console.log("it's saturday");
        break;
    case 7:
        console.log("it's Ravivar");
        break;
    default:
        console.log("Invalid day");
}









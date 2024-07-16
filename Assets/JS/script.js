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

// let day = 8;

// switch (day){
//     case 1:
//         console.log("it's Monday");
//         break;
//     case 2: 
//         console.log("it's Tuesday");
//         break;
//     case 3:
//         console.log("it's Wednesday");
//         break;
//     case 4:
//         console.log("it's thursday");
//         break;
//     case 5:
//         console.log("it's friday");
//         break;
//     case 6:
//         console.log("it's saturday");
//         break;
//     case 7:
//         console.log("it's Ravivar");
//         break;
//     default:
//         console.log("Invalid day");
// }


// Data Types : Primitive and Reference
// Primitive : Number, String, Boolean, undefined. null
// Reference : Array and Object

// let empObj ={
//     empName: "Prem Kumar",
//     empAge: 20,
//     empSalary: 25000,
//     empDes: "Op. Manager",
//     empId: 420
// }

// console.log(empObj);


// let num1 = Number(prompt("Enter 1st value"));
// let num2 = Number(prompt("Enter 2nd value"));
// let num3 = Number(prompt("Enter 3rd value"));

// if(num1 > num2 && num1 > num3){
//     if(num2 > num3){
//         console.log(`${num1} - ${num2} - ${num3}`);
//     }
//     else{
//         console.log(`${num1} - ${num3} - ${num2}`);
//     }
// }
// else if(num2 > num1 && num2 > num3){
//     if(num1 > num3){
//         console.log(`${num2} - ${num1} - ${num3}`);
//     }
//     else{
//         console.log(`${num2} - ${num3} - ${num1}`);
//     }
// }
// else if(num3 > num1 && num2 < num3){
//     if(num1 > num2){
//         console.log(`${num3} - ${num1} - ${num2}`);
//     }
//     else{
//         console.log(`${num3} - ${num2} - ${num1}`);
//     }
// }
// else{
//     console.log("All three values are equal");
// }


// Loops : while, do-while, for, forEach, for-in
// loop ke kaam karne ka taqniq : 1. initialization variable    2. conditions apply     3. incre | decre

// 1. while : 

// let num = 1;
// while(num < 11){
//     console.log(num);
//     num++;
// }

// 2. do-while : 

// let num = 10;
// do{
//     console.log(num);
//     num--;
// }while(num > 0);

// 3. for loop : 

// for(let num = 1; num <= 10; num++){
//     console.log(num);
// }







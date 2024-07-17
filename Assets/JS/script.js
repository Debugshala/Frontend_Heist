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




// Nested For loop : 

// for(let row = 1; row <= 100; row += 10){
//     for(let col = row; col < row + 10; col++){
//         if(row == 1){
//             document.write(col + " &nbsp;&nbsp;&nbsp;&nbsp;");
//         }
//         else{
//             document.write(col + " &nbsp;&nbsp;");
//         }
//     }
//     document.write("<br>");
// }



// Functions in JavaScript : 
// Standard Function 
// function sum(){
//     console.log(20 + 25);
// }

// sum();


// Parametric Function : 

// function sum(num1, num2){
//     console.log(num1 + num2);
// }

// sum(20, 25);
// sum(100, 25);
// sum(200, 15);
// sum(30, 65);


// Function with return values : 

// function sum(a, b){
//     return a + b;
// }

// let result = sum(50,60);

// console.log(result);


// real life example for the function which will return some values :

let stduent_name = prompt("Enter the student's name");
let mathsMarks = Number(prompt("Enter marks for maths"));
let engMarks = Number(prompt("Enter marks for english"));
let hnMarks = Number(prompt("Enter marks for hindi"));
let sstMarks = Number(prompt("Enter marks for sst"));
let scMarks = Number(prompt("Enter marks for sc"));


function marks(maths, eng, hn, sst, sc){
    let obtained_marks = eng + hn + sc + maths + sst;
    return obtained_marks;
}

let ob_mrks = marks(mathsMarks, engMarks, hnMarks, sstMarks, scMarks);

function percentage(obt_marks){
    let total_marks = 500;
    let percent = obt_marks/total_marks * 100;
    return percent;
}

let percent = parseInt(percentage(ob_mrks));

function grading(prct){
    if(prct <= 100 && prct > 80){
        document.write(`${stduent_name} has scored ${ob_mrks} marks and got ${prct}% and secured A Grade`)
    }
    else if(prct <= 80 && prct > 60){
        document.write(`${stduent_name} has scored ${ob_mrks} marks and got ${prct}% and secured B Grade`)
    }
    else if(prct <= 60 && prct > 40){
        document.write(`${stduent_name} has scored ${ob_mrks} marks and got ${prct}% and secured C Grade`)
    }
    else if(prct <= 40 && prct >= 33){
        document.write(`${stduent_name} has scored ${ob_mrks} marks and got ${prct}% and secured D Grade`)
    }
    else if(prct < 33){
        document.write(`Hello ${stduent_name}, you are successfully failed | better luch for the next year`);
    }
    else{
        document.write("invalid perncentage");
    }
}

grading(percent);














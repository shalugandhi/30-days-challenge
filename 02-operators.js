// Day 2: Operators
// Activity 1: Arithmetic Operations
// Task 1: Write a program to add two numbers and log the result to the console.

function arithmetic (num1, num2) {
    var total = num1 + num2;
    return total;
}
arithmetic(22,42);
console.log('Arithmetic operation value', arithmetic(22,42));

// Task 2: Write a program to subtract two numbers and log the result to the console.

function subtraction(a,b){
    console.log(`Subscrion of ${a} and ${b} value is ${a - b}`);
}
subtraction(50,30);

// Task 3: Write a program to multiply two numbers and log the result to the console.
function multiply(x,y){
    console.log(`Multiply of ${x} and ${y} value is ${x * y}`);
}
multiply(18,4);

// Task 4: Write a program to divide two numbers and log the result to the console.

function division(c,d){
    console.log(`Divison of ${c} and ${d} value is ${c / d}`);
}
division(24,12);

// Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
function reminder(dividend, divisor){
    let remainder = dividend % divisor;
    console.log("The remainder when", dividend, "is divided by", divisor, "is:", remainder);
    return remainder; 
}
reminder (12,7);

// Activity 2: Assignment Operators
// Task 6: Use the += operator to add a number to a variable and log the result to the console.

let mynum = 15;
mynum += 7 // mynum = mynum + 7
console.log(`The value of mynum is ${mynum}`);

// Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
let subValue = 25;
subValue -= 9 // mynum = mynum + 9
console.log(`The substractValue is ${subValue}`);

// Activity 3: Comparison Operators
// Task 8: Write a program to compare two numbers using > and < and log the result to the console.

function compareValue(a,b){
    if(a>b){
        console.log(`The value of ${a} is greater than of ${b}`);
    }
    else if(a<b){
        console.log(`The value of ${a} is less than of ${b}`);
    }
    else{
        console.log(`The value of ${a} is equal to ${b}`);
    }
}

compareValue(15,11);
compareValue(3,9);
compareValue(14,14);

// Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.

function compareOne(a,b){
    if(a>=b){
        if(a>b){
            console.log(`The value of ${a} is greater than of ${b}`);
        }
        else if(a=b){
            console.log(`The value of ${a} is equal to ${b}`);
        }
        else{
            console.log(`The value of ${a} is less than of ${b}`);  
        }        
    }
}
compareOne(5,3);
compareOne(9,9);
compareOne(2,6);

function compareTwo(a,b){
    if(a<=b){
        if(a<b){
            console.log(`The value of ${a} is less than of ${b}`);
        }
        else if(a=b){
            console.log(`The value of ${a} is equal to ${b}`);
        }
        else{
            console.log(`The value of ${a} is grater than of ${b}`);  
        }        
    }
}
compareTwo(4,8);
compareTwo(10,10);
compareTwo(5,2);

// Task 10: Write a program to compare two numbers using == and === and log the result to the console.
function compareEquval (a, b){
    if(a === b){
        console.log('both value and Data type is same')
    }else if (a == b){
        console.log('only value is same')
    }else{
        console.log('Both value and data type are different');
    }
}
compareEquval(2,2);
compareEquval(2,"2");
compareEquval(3,5);

// Activity 4: Logical Operators

// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
function combineMain (val1, val2){
    if(val1 > val2  && val1 < 10 ){
        console.log(`${val1} is greater than ${val2} and ${val1} is smaller than 10`)
    }else{
        console.log('hi how are you')
    }
}
combineMain(5, 3);
combineMain(15, 4)
// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.

function combineOr(num1 ,num2){
    if((num1 == num2) || (num1 > 10)){
        console.log(`one codition or both condition true`)
    }else{
        console.log('both condition false')
    }
} 
combineOr( 5 , 5)
combineOr( 10 , 5)
combineOr( 11 , 5)

// Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.

let vl = 3
if (vl != 5){
    console.log('condition is true')
}

function notOperator(val){
    if(!val){
        console.log(`The value is falsy: ${val}`)
    }else{
        console.log(`The value is truthy: ${val}`)
    }
}
notOperator(true);
notOperator(false);
notOperator(0);
notOperator(1);
notOperator(undefined);
notOperator(NaN);
notOperator(0n);
notOperator('nirmal');
notOperator('0');
notOperator('false');

// Activity 5: Ternary Operator
// Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
function ternaryMain (val){
  val >= 0 ? console.log('value is positive') :  console.log('value is negative');
}
ternaryMain(5)
ternaryMain(0)
ternaryMain(1)
ternaryMain(-1)
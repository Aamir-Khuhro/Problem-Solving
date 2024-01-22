// console.log("Aamir Ali");
// if (14 < 14){
//     console.log('HI');
// }else{
//     console.log('Hello');
// }

// num = (Math.random() * 31 + 20) | 0
// console.log(num);

// let dice = Math.floor((Math.random() * 6 + 1))
// console.log(dice);

const entity = {
    name : 'Aamir Ali',
    caste: 'Khuhro',
    f_name: 'Qalandar Bux',
    age: 23
};

// console.log(x);  // Output: undefined
// let x = 5;
// console.log(x);  // Output: 5


function add() {
    let sum = 0;
    // console.log(arguments);
    // console.log(arguments.length);
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    // return sum;
    // console.log(Math.sum(4, 2, 4, 5))
    // Math.s
    
}
// console.log(add(1, 4, 5, 2, -5))
// add(1, 4, 5, 2, -5)


// Function hoisting
// draw();s

// let draw = () => console.log('I am drawing');
// function draw(){
//     console.log('I am drawing');
// }


// const myArray = [4, 1, 6, 2];

// function square(num){
//     return num ** 2
// }

// const squares = myArray.map(square);
// // console.log(squares);

// const ages = [1,51, 2, 7, 21, 19];
// function adult(age){
//     return age >= 18;
// }

// const adults = ages.filter(adult);
// console.log(adults);

// const nums = [45, 23, 53, 63, 23, 724, 286, 22, 66, 20];
// const evens = nums.filter(function(num){
//     return num % 2 === 0;
// })

// console.log(evens);


function msg(){
    console.log('I love you.');
}
setTimeout(msg, 5000);

setTimeout(() => console.log('I hate you'),3000);



// let age = prompt('how old are you?', 50);

// alert(`you are ${age} years old`);

// for(let i = 0; i <= 5; i++){
//     for(let j = 0; j <= 10; j++){
//         if(j===5){
//             continue;
//         }
//         console.log(j);
//     }
// }

// ASSIGNMENT

// 1. GIVE AN ANSWER TO THIS 

// AND EXPLAIN

// 1. let i = 0 let i is less than 50, let it iterate by 1

// for(let i = 0; i < 50; i++){
 //   console.log(i);
//}



// 2. write a for loop inside a for loop and write an if statement to make it continue 
// let i = 0, i less than 20
// let j = 0, j less than 10

// for(let i = 0; i < 20; i++){
//     for(let j = 0; j < 10; j++){
//         if(j===5){
//             continue;
//         }
//         console.log(j);
//     }
// }


// 3. write a for loop inside a for loop and write an if statement to make it break 
// let i = 0, i less than and equal to 20
// let j = 0, j less than and equal to 10

for(let i = 0; i <= 20; i++){
    for(let j = 0; j <= 10; j++){
        if(j===5){
            break;
        }
        console.log(j);
    }
}



//the confirm function

//let isBoss = confirm("Are you the boss?");
//alert(isBoss);

// TYPE CONVERSIONS...

// string conversion
// let value = true;
// alert(typeof value); // boolean

// value = String(value); // now value is a string "true"
// alert(typeof value); // string 



// NUMERIC CONVERSION

// alert("6" / "2"); // 3, strings are converted to numbers

// let str = "123";
// alert(typeof str); // string

// let num = Number(str); // becomes a number 123

// alert(typeof num); // number






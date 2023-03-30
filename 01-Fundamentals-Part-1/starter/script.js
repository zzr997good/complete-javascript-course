// let js = 'amazing';
// if (js === 'amazing') alert('JavaScript is FUN!');

// 40 + 8 + 23 - 10;
// console.log(40 + 8 + 23 - 10);

// let markMass = 78, markHeight = 1.69;
// let johnMass = 92, johnHeight = 1.95;
// let markMass = 95, markHeight = 1.88;
// let johnMass = 85, johnHeight = 1.76;
// let markBMI = markMass / (markHeight ** 2), johnBMI = johnMass / (johnHeight ** 2);
// console.l  og(markBMI, johnBMI);
// let markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew)
// console.log('String with\n\
// multiple\n\
// lines');

// console.log(`String with
// multiple
// lines`);

// const age = 15;
// // const isOldEnough = age >= 18;
// if (age >= 18) {
//     console.log('Sarah can start driving license 🚗!');
// }
// else {
//     console.log(`Sarah is too young. Wait another ${18 - age} years:)`);
// }

let markMass = 78, markHeight = 1.69;
let johnMass = 92, johnHeight = 1.95;
// let markMass = 95, markHeight = 1.88;
// let johnMass = 85, johnHeight = 1.76;
let markBMI = markMass / (markHeight ** 2), johnBMI = johnMass / (johnHeight ** 2);
// console.log(markBMI, johnBMI);
// let markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);
if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
}
else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}
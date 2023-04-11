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

// let markMass = 78, markHeight = 1.69;
// let johnMass = 92, johnHeight = 1.95;
// // let markMass = 95, markHeight = 1.88;
// // let johnMass = 85, johnHeight = 1.76;
// let markBMI = markMass / (markHeight ** 2), johnBMI = johnMass / (johnHeight ** 2);
// // console.log(markBMI, johnBMI);
// // let markHigherBMI = markBMI > johnBMI;
// // console.log(markHigherBMI);
// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
// }
// else {
//     console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
// }

//Type Conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Johns'));
// console.log(typeof NaN);

// console.log(String("23"), 23);

// //Type Coercion
// console.log(`I am ` + 23 + ` years old!`);
// console.log(`23` - `10` - 3);
// console.log(`23` / 2);

// let n = '1' + 1;
// n -= 1;
// console.log(n);

// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;
// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1991);
// console.log(age1, age2);

// const calcAge3 = birthYear => 2037 - birthYear;
// console.log(calcAge3(1998));

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years.`;
// }

// console.log(yearsUntilRetirement(1998, 'Zhiren'))

// function cutFruitPieces(fruit) {
//     return fruit * 4
// }

// function fruitProcessor(fruit1, fruit2) {
//     const fruit1Pieces = cutFruitPieces(fruit1);
//     const fruit2Pieces = cutFruitPieces(fruit2);
//     return `Juice with ${fruit1Pieces} pieces of oranges and ${fruit2Pieces} pieces of apples`;
// }

// console.log(fruitProcessor(3, 9));

// const calcAverage = (firstScore, secondScore, thirdScore) => (firstScore + secondScore + thirdScore) / 3;
// function checkWinner(avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) console.log(`Dolphins win🏆 (${avgDolphins} vs. ${avgKoalas})`);
//     else if (avgKoalas >= 2 * avgDolphins) console.log(`Koalas win🏆 (${avgKoalas} vs. ${avgDolphins})`);
//     else console.log(`No team wins`);
// };

// // const avgDolphins = calcAverage(44, 23, 71);
// // const avgKoalas = calcAverage(65, 54, 49);
// const avgDolphins = calcAverage(85, 54, 41);
// const avgKoalas = calcAverage(23, 34, 27);
// checkWinner(avgDolphins, avgKoalas);

// const friends = ['Micheal', 'Steven', 'Peter'];
// console.log(friends);
// const years = new Array(1991, 1993, 1995, 1998);
// console.log(years[0]);
// console.log(years[1]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);
// const jonas = ['Jonas', 'Fii', 2023 - 1997, 'teacher', friends];
// console.log(jonas);
// const calcAge = function (birthYear) {
//     return 2023 - birthYear;
// }
// // console.log(calcAge(years));

// //Add elements
// console.log(friends.push('ZZR'));
// console.log(friends.unshift('ZZRZZr'));
// //Remove elements
// console.log(friends.pop());
// console.log(friends.shift());
// console.log(friends.indexOf('Peter'));
// console.log(friends.indexOf('Bob'));
// console.log(friends.includes('Bob'));

// const calcTip = function (bill) {
//     if (bill >= 50 && bill <= 300) return bill * 0.15;
//     else return bill * 0.2;
// }

// console.log(calcTip(100));

// const bills = new Array(125, 555, 44)
// const tips = [];
// for (let i = 0; i < bills.length; i++) tips.push(calcTip(bills[i]));
// const totals = [];
// for (let i = 0; i < bills.length; i++) totals.push(bills[i] + tips[i]);
// console.log(bills, tips, totals);

// const jonas = {
//     firstName: 'jonas',
//     lastName: 'Schmedtmann',
//     age: 2038 - 1991,
//     job: 'teacher',
//     friends: ['Amy', 'Lily']
// };
// // dot notation can only statistically access property
// console.log(jonas);
// console.log(jonas.firstName);
// // square bracket notation can dynamically access property
// console.log(jonas['lastName']);
// console.log(jonas['age']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// //interestedProperty holds a string literal value
// // const interstedProperty = prompt(`What do you want to know about Jonas? Choose one propery between firstName,lastName,age,job and friends.`);
// // if (jonas[interstedProperty]) {
// //     console.log(jonas[interstedProperty]);
// // } else {
// //     console.log('Jonas does not have this property');
// // }
// jonas.location = 'China';
// jonas.age = 53;
// console.log(jonas);
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);


// const jonas = {
//     firstName: 'jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Amy', 'Lily'],
//     calcAge: function () {
//         return 2037 - this.birthYear;
//     }
// };

// const jonas = {
//     firstName: 'jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Amy', 'Lily'],
//     calcAge: function () {
//         this.age = 2038 - this.birthYear;
//         return this.age;
//     },
//     hasDriverLience: false,
//     summary: function () {
//         return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriverLience ? 'a' : 'no'} driver's license.`
//     }
// };
// console.log(jonas.calcAge());
// console.log(jonas.calcAge());
// console.log(jonas.calcAge());
// console.log(jonas['calcAge']());
// console.log(jonas.summary()); 

// const john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.BMI = this.mass / (this.height * this.height);
//         return this.BMI;
//     }
// };
// const mark = {
//     firstName: 'Mark',
//     lastName: 'Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.BMI = this.mass / (this.height * this.height);
//         return this.BMI;
//     }
// };

// mark.calcBMI();
// john.calcBMI();
// if (mark.BMI > john.BMI) {
//     console.log(`${mark.firstName}'s BMI (${mark.BMI}) is higher than ${john.firstName}'s (${john.BMI})`);
// } else if (mark.BMI < john.BMI) {
//     console.log(`${john.firstName}'s BMI (${john.BMI}) is higher than ${mark.firstName}'s (${mark.BMI})`);
// }

// for (let i = 1; i <= 10; i++) console.log(`Lifting weights repetition ${i}`);

// const jonas = [
//     'jonas',
//     'stupid',
//     2037 - 1991,
//     'teacher',
//     ['Micheal', 'Peter', 'Steven'],
//     true
// ]

// for (let i = 0; i < jonas.length; i++) console.log(jonas[i], typeof (jonas[i]));


const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
    if (bill >= 50 && bill <= 300) return bill * 0.15;
    else return bill * 0.2;
}

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(tips[i] + bills[i]);
}
console.log(bills, tips, totals);
const calcAvg = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) sum += arr[i];
    return sum / arr.length;
}

console.log(calcAvg(totals));
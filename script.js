'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES



// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
///////////1)
/*
//arrys is the most used data structure, so use arrays all the time so in this secion, we will learn all about these tools(arrys methods) so how to use them, and even more importantly WHEN TO USE THEM

//TODO: EL MUTAR O NO LOS VALORES ORIGINALES ES UNA CARACTERISTICA MUY DETALLADA, PERO QUE ES MUY IMPORTANTE, PUES PARA DETERMINADAS IMPLEMENTACIONES SE VA A NECESITAR O NO MUTAR LOS VALORES ORIGINALES.

// SLICE METHOD : nos permite extraer parte del arry sin cambiar el original.

let arr = ['a', 'b', 'c', 'd', 'e'];

console.warn('========SLICE')
console.log(arr.slice(2));
console.log(arr.slice(2,4)); // es excluyente con el ulitmo valor.
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1,-2));
//Formas de crear una copya de un array
console.log(arr.slice());
console.log([...arr]);

//SPLICE METHOD: extrae una parte del original cambiando el original, muta nuestro valores originales.

//splice(start index, elements(remove or replace), (value replace))

console.warn('=======SPLICE')
// console.log(arr.splice(2)); //Toma la parte del array desde el indice donde se indica 
arr.splice(-1);
console.log(arr); // y la remueve del original.
arr.splice(1,2);
console.log(arr)


//REVERSE: invierte el sentido del arry 
console.warn('=========REVERSE');
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j','i', 'h', 'g','f'];

console.log(arr2.reverse());
console.log(arr2);//Muta el valor original.

//CONCAT
const letters = arr.concat(arr2);
console.log(letters);

//JOIN: Une los elementos de una array por una caracteriste determinada

console.log(letters.join(' => ')) //Esto regresa un string 
*/

//////////////////////////////////////////////////////////
///////////looping arrays: FOR ECHT 

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//Veamos la diferencia entre forof and forecht
//1) para ambos el breack y continue no se pueden usar.
//2)
for (const [i, movement] of movements.entries()) {
  if(movement > 0 ){
    console.log(`Movement ${i + 1} You deposited ${movement}`)
  }else{
    console.log(`Movement ${i + 1} You withdrew ${Math.abs(movement)}`);
  }
}


console.warn('===========FORECHT')

movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}You withdrew ${Math.abs(movement)}`);
  }
});

// 0: function (200)
// 1: function (450)
// 2: function (400)
//.....

//forecht in maps and sets.

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

console.log('==========For echt in map');
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`)
});



//set
//* recuerda que los set no tienen una key determinada ya que estos valores no se pueden extraer de el y no tienen un orden determinado.
const currenciesUnique = new Set(['USD','BGP','USD','EUR','EUR']);
console.log('===========For echt set')
currenciesUnique.forEach(function (value, _, set) {
  console.log(`${value1}: ${value}`);
})


*/































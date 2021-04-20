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

//tips: antes de pasar vriables globales, peienza en la funcionalidad de tus funciones. primero crea tu funcion y luego mira que le metes.


const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach( function (mov, i ) {

    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>

          <div class="movements__value">${mov}€</div>
        </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin',html);

  });
};

// displayMovements(account1.movements);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} €`;
};

// calcDisplayBalance(account1.movements);


const calcDisplaySummary = function (accounts) {
  const incomes = accounts.movements.filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes} €`;

  const outcomes = accounts.movements.filter( mov => mov < 1)
    .reduce((acc, current) => acc + current, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)} €`;

  const interest = accounts.movements.filter(mov => mov > 0)
    .map((deposit) => (deposit * accounts.interestRate) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, current) => acc + current, 0)
  labelSumInterest.textContent = `${interest} €`;
};

// calcDisplaySummary(account1.movements);


const updateUI = function (acc) {
  //Diplay movements
  displayMovements(acc.movements);
  //Display balance
  calcDisplayBalance(acc);
  //Display summary
  calcDisplaySummary(acc);
}


//login
//Event handler
let currentAccount;

btnLogin.addEventListener('click', function (event) {
  //Prevent form from submitting
  event.preventDefault();
  //si el metodo fin no encuentra nada, regresa undefine
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);

  console.log(currentAccount);
  //?. solo si la cuenta que ingresa el usuraio existe valida
  if(currentAccount?.pin === Number(inputLoginPin.value)){
    // console.log('LOGIN');
    //Display UI and welcome massege

    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    //Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    
    //Update UI
    updateUI(currentAccount);
    
  }
});


//Transfer money

btnTransfer.addEventListener('click', function (event) {
  event.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);

  console.log(amount, receiverAcc);

  if(amount > 0 && /* receiverAcc && */ currentAccount.balance >= amount && receiverAcc?.username !== currentAccount.username ){
    // console.log('Transfer valid')
    //Doing a transfer.
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    //Update UI
    updateUI(currentAccount);
  }
})


// console.log(containerMovements.innerHTML);


//Usar metodos para hacer el login de usuario.

//1) el usurio ingresara sus iniciales en minuscula

// const user = 'Steven Thomas Williams'; //stw
// const userName = user
//                 .toLocaleLowerCase()
//                 .split(' ')
//                 .map(function (name) {
//                   return name[0]
//                 })
//                 .join('');

const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLocaleLowerCase()
      .split(' ')
      .map(function (name) {
        return name[0];
      })
      .join('');
  });
};

console.log(createUsername(accounts));
console.log(accounts);

























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

//////////////////////////////////////////////////////////////////
/////////////////////DATA TRANSFORMATIONS: MAP, FILTER, REDUCE

/*
//MAP: REGERSA UN NUEVO ARRAY CON LOS VALORES MUTADOS.
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
const eurToUsd = 1.1;


//TODO: functional programing
const movementsUSD = movements.map(function (move) {
  return move * eurToUsd
})
console.log(movementsUSD);

const movementsDescriptions = movements.map((mov, i, arr) => {
  //ternari operator

  return `Movement ${i + 1}: ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`;



  // if( mov > 0){
  //   return `Movement ${i + 1}: You deposited ${mov}`
  // }else{
  //   return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
  // };
});


console.log(movementsDescriptions);
//Arrow function

// const movementsUSDArrow = movements.map( mov => mov * eurToUsd)

// const movementsUSDfor = []
// for (const mov of movements) {
//   const usd = mov * eurToUsd;
//   movementsUSDfor.push(usd);
// }

// console.log(movementsUSDfor);
// console.log(movementsUSDArrow);
*/


///////////////////////////////////////////////////////////
////Filter method.
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter( deposit => {
  return deposit > 0;
})

console.log(deposits);

const withdrawals = movements.filter((retiro ) =>{
  return retiro < 0
});

console.log(withdrawals);
*/

////////////////////////////////////////////////////////
//////Reduce
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);


//accumulator ==> SNOWBALL
const balance = movements.reduce(function (accumualtor, current, i,arr) {
  console.log(`Iteration ${i}: ${accumualtor}`)
  return accumualtor + current;
}, 0); //Este segundo parametro es el valor inicial del acomulador.

console.log(balance);

//for of

let balance2 = 0;
for (const mov of movements) {
  balance2 += mov;
}
console.log(balance2);


//Maximun value.
//ojo el lio es saber que valor toma el acc.
//el acumulador es un valor dinamico que yo elijo como se comporta
const maximun = movements.reduce((acc, current,i)=> {
  console.log(`${acc} ${current}`)
  if( acc > current ){
    return acc
  }else{
    return current
  }
}, movements[0]);

console.log(maximun);
*/
//////////////////////////////////////////////////////////////////////The magic of Chaining Methods

/*
//EJ : digamos que queremos tomar todos los movimientos, luego convertirlo en dolares y finalmente sumarlos todos para saber exactamente cuantos se deposito en la cuenta.
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;


//PIPELINE
//PARA ENCONTRAR ERRORES EN ESTA DORMA DE TRATAR LOS DATOS, ES BUENO HACER UN CHECK A LOS ARRAY
const totalDepositsUSD = movements
  .filter(mov => mov > 1)
  // .map((mov, i , arr) => {
  //   console.log(arr);
  //   mov * eurToUsd;
  // })
  .map(mov => mov * eurToUsd)
  .reduce((acc, current) => acc + current, 0);

console.log(totalDepositsUSD);

*/


///////////////////////////////////////////////////////////////////THE FIND METHOD
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const firstWithdrawal = movements.find(mov  => mov < 0 )
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const accunt = accounts.find(acc => acc.owner === 'Jessica Davis');

console.log(accunt);

//For of

let objExtriado;

for (const [index, obj] of accounts.entries()) {
  // console.log(obj.owner);
  if( obj.owner === 'Jessica Davis'){
    objExtriado = obj;
  }
}

console.log(objExtriado);


//extraer objetos de un array con find
*/

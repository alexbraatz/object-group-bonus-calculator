// let array = [ "snacks", "books", "dog", "tv" ];

// let human = {
//   name: "Alex",
//   favoriteChips: "Doritos",
//   favoriteDip: "Salsa",
//   favoriteDrink: "Green Juice",
//   favoriteTreat: "Hi-Chews"
// };

// human.favoriteBeer = "IPA";

// console.log( human );

let employeename = "Mayella"

employeeWithBonus = []
employeeWithBonus[0] = employeename;
console.log( employeeWithBonus );

//employeename ="Mayella";
employeeWithBonus[1] = employeename;
console.log( employeeWithBonus );

const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000', 
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

let bonusPercent = 0;
let annualCompensation = 0;
let bonus = bonusPercent * annualCompensation;
let employeesWithBonus = [];

let employeeBonusInfo = {
  name: "name",
  bonusPercentage: bonusPercent,
  totalCompensation : annualCompensation, // (base annual + bonus)
  totalBonus: bonus // (bonusPercent * salary)
};

function employeeBonusCaluculator( listOfEmployees ){
    
  for ( let employee of listOfEmployees ){

    if ( employee.reviewRating <= 2 ){
      //console.log( employee );
      employeeBonusInfo.name = employee.name;
      employeeBonusInfo.bonusPercentage = 0.5;
      employeeBonusInfo.totalBonus = ( Number( employee.annualSalary ) * Number( employeeBonusInfo.bonusPercentage ) );
      employeeBonusInfo.totalCompensation = Number(employee.annualSalary) + ( Number( employee.annualSalary ) * Number( employeeBonusInfo.bonusPercentage ) );
      employeesWithBonus.push( employeeBonusInfo );
    }

  }

  return employeesWithBonus;
}

console.log( employeeBonusCaluculator( employees ) );

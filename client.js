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

let employeesWithBonus = [];

function employeeBonusCaluculator( listOfEmployees ){
    let bonusPercent = 0;
    let annualCompensation = '100';
    let bonus = bonusPercent * annualCompensation;

    let employeeBonusInfo = {
        name: "name",
        bonusPercentage: bonusPercent,
        totalCompensation: annualCompensation, // (base annual + bonus)
        totalBonus: bonus // (bonusPercent * salary)
    };
    
    for ( employee of listOfEmployees ){
        if ( employee.reviewRating <= 2 ){
            employeeBonusInfo.name = employee.name;
            employeesWithBonus.push( employeeBonusInfo );
        }
    }

    
    return employeesWithBonus;
}

console.log( employeeBonusCaluculator( employees ) );

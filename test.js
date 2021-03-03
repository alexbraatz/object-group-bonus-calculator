// let employee = {
//     name: "Sarah",
//     employeeNumber: "1234",
//     annualSalary: "85k",
//     reviewRating: 4
// };

// function employeeBonusCaluculator( employeeInfo ){
//     console.log( employeeInfo );
// }

// employeeBonusCaluculator( employee );

let employees = [

    {   name: "Sarah",
        employeeNumber: "1234",
        annualSalary: "85k",
        reviewRating: 1
    },

    {
        name: "Alex",
        employeeNumber: "2345",
        annualSalary: "75k",
        reviewRating: 2
    }

]

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
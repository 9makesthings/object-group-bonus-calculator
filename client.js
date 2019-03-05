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

$( document ).ready( function() {
  $('#createButton').on( 'click', function(){
    let addPerson = bonusCalculator( $( '#enterName' ).val());
    let bonusList = $( '#bonus');
    for (roster of employees){
      bonusList.empty();
      bonusList.append( '<li>' + BonusIssued.totalBonus + '</li>');
    }
  } )
})

 function bonusCalculator (roster) {
   for( let i=0; i<employees.length; i++ ){
      let person = employees[i];
       if( roster === person.name){
        // Checks reviewRating 
        if( person.reviewRating <= 2){
          bonusPercentage = 0;
        }
          else if( person.reviewRating == 3 ){
          bonusPercentage = .04;
           
         }
          else if( person.reviewRating == 4){
           bonusPercentage = .06;
          }
            else if( person.reviewRating == 5){
              bonusPercentage = .10;
            }
          // Checks tenure 
          // Define variable to call length of string number
          let employeeNum = person.employeeNumber.length;
          if(employeeNum == 4 && person.reviewRating > 2){
            bonusPercentage += .05;
          }
          // If income > $65,000
          if( person.annualSalary > 65000 && person.reviewRating > 2){
            bonusPercentage += -.01;
          }
          // No bonus can be above 13% 
          if( bonusPercentage > .13 ){
            bonusPercentage = .13;
          }
  
          // Calculate totalComp
          totalBonus = person.annualSalary * bonusPercentage;
          totalComp = totalBonus + Number(person.annualSalary);

      
        // returns the new object if person exists
        return new BonusIssued(roster, bonusPercentage, totalComp, totalBonus);
      }
   }
   return false;
}

class BonusIssued {
  constructor( name, bonusPercentage, totalComp, totalBonus){
    this.name = name;
    this.bonusPercentage = bonusPercentage;
    this.totalComp = totalComp;
    this.totalBonus = totalBonus
  }
}

console.log(`is Atticus in array`, bonusCalculator('Atticus'));
console.log(`is Atticus in array`, bonusCalculator('Jem'));
console.log(`is Atticus in array`, bonusCalculator('Scout'));
console.log(`is Atticus in array`, bonusCalculator('Robert'));
console.log(`is Atticus in array`, bonusCalculator('Mayella'));


// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );



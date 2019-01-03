// var markHeight  = 1.8;
// var johnHeight = 1.78;
// var markWeight = 105;
// var johnWeight = 84;

// function bmiCalc (weight, height ){ 
//     return weight/ (height*height);
    
// }

// var markBmi = bmiCalc(markWeight,markHeight);
// console.log(markBmi);
// var johnBmi = bmiCalc(johnWeight,johnHeight);
// console.log(johnBmi);
// var maxBmi = markBmi>johnBmi;
// console.log ('Is Mark\'s BMI greater than John ? '+ maxBmi); 

/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points,
 while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

//creat arrays from both players scores
// var johnScores = [89,120,103] ;
// var markScores = [116,94,123];
// var maryScores = [97,134,105];

// // use .reduce to sum up arrays 
// var totalJohnScore =johnScores.reduce(add,0);
//     function add(a, b) {
//         return a + b;
//     }

// var totalMarkScore =markScores.reduce(add,0);
//     function add(a, b) {
//         return a + b;
//     }

//     var totalMaryScore =maryScores.reduce(add,0);
//     function add(a, b) {
//         return a + b;
//     }
// var averageScoreJohn =totalJohnScore/3;
// var averageScoreMark =totalMarkScore/3;
// var averageScoreMary = totalMaryScore/3;

// if (averageScoreJohn>averageScoreMark  && averageScoreJohn>averageScoreMary){
//     console.log('John is the winner! With an average of '+ averageScoreJohn);
// }
// else if  (averageScoreMark>averageScoreJohn && averageScoreMark>averageScoreMary){
//     console.log('Mark is the Winner!With an average of ' + averageScoreMark);
// } 
// else {
// console.log('Mary is the winner!With an average of '+ averageScoreMary);
// }

// console.log (totalJohnScore);
// console.log(totalMarkScore);
// var averageScore 
// ;


/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). 
He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, 
and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

var restaurantBills= [124,48,268];
// var arryLength = restaurantBills.length;
// console.log(arryLength);

//  function tipCalc1(){
//     for (i=0;i<restaurantBills.length;i++)
//     {
//     if (restaurantBills[i]<50)
//     {return restaurantBills[i]*.2}
//     else if (restaurantBills[i]>50 && restaurantBills[i] < 200)
//     {
//     return restaurantBills[i]*.15
//     }  
//     else { return restaurantBills[i]*.1
//     }
//         }
//             }
//   console.log(tipCalc1());


// // the tip is .2 of the bill using .map
// var tips = restaurantBills.map(x => x * 0.2);
// var tipPlus = restaurantBills.map(x => x * 0.2 + x);

// console.log(tips);
// console.log(tipPlus);

// Stefan redo challenge three and READ THE BLOODY CONDITIONS or USER STORY FIRST !!!


/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/


// var mark ={
// fullname :"Mark Smith",
// mass: 104,
// height: 1.80,
// bMi : function () { return this.mass / (this.height * this.height);}
// };

// console.log(mark.bMi());

// var john = {
//     fullname : "John Akeem",
//     mass: 76,
//     height: 1.66,
//     bMi : function () { return this.mass / (this.height * this.height);}
//     };


// if (mark.bMi> john.bMi) {
//     console.log(`${mark.fullname} has the BMI of ${mark.bMi()} and is  higher  bmi than ${john.fullname} who has ${john.bMi()} `);
// } else  if (john.bMi> mark.bMi) {
//     console.log(`${john.fullname} has the BMI of ${john.bMi()} and is  higher  bmi than ${mark.fullname} who has ${mark.bMi()} `)
//     }
// else {
//     console.log (`Both ${john.fullname} and ${mark.fullname} have the same BMI `);
//     }


/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips.
 HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

// var john= {
//     bills:[124,48,268,180,42],
//     tipCalculator :function (){
//         var percentage;
//         if (bill < 50) {
//             percentage = 0.2;
//         }
//         else if (bill>= 50 && bill <200){
//             percentage = 0.15;
//         }
//         else {
//             percentage = 0.1;
//         }
//        return percentage*bill ;
//     }
// };


/********* advanced  */
var johnAlltips  ;
var markAlltips ;
var johnTotalBill;//bill + tip
var markTotalBill ;//bill + tip
var john= {
    bills:[124,48,268,180,42]   
    
};
var mark ={
    bills: [77, 375, 110,45]

};
function tipCalculator (){
    var percentage;
    if (bill < 50) {
        percentage = 0.2;
    }
    else if (bill>= 50 && bill <200){
        percentage = 0.15;
    }
    else {
        percentage = 0.1;
    }
   return percentage*bill ;
}

johnAlltips = john.bills.map(tipCalculator);
markAlltips = mark.bills.map(tipCalculator);
johnTotalBill = john.bills.map(tipCalculator + bill);
markTotalBill= mark.bills.map(tipCalculator +bill);
var averageBillJohn;// reduce to average ?
var averageBillMark;//reduce to average ?


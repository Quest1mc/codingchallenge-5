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
var johnScores = [89,120,103] ;
var markScores = [116,94,123];
var maryScores = [97,134,105];

// use .reduce to sum up arrays 
var totalJohnScore =johnScores.reduce(add,0);
    function add(a, b) {
        return a + b;
    }

var totalMarkScore =markScores.reduce(add,0);
    function add(a, b) {
        return a + b;
    }

    var totalMaryScore =maryScores.reduce(add,0);
    function add(a, b) {
        return a + b;
    }
var averageScoreJohn =totalJohnScore/3;
var averageScoreMark =totalMarkScore/3;
var averageScoreMary = totalMaryScore/3;

if (averageScoreJohn>averageScoreMark  && averageScoreJohn>averageScoreMary){
    console.log('John is the winner! With an average of '+ averageScoreJohn);
}
else if  (averageScoreMark>averageScoreJohn && averageScoreMark>averageScoreMary){
    console.log('Mark is the Winner!With an average of ' + averageScoreMark);
} 
else {
console.log('Mary is the winner!With an average of '+ averageScoreMary);
}

console.log (totalJohnScore);
console.log(totalMarkScore);
var averageScore 
;
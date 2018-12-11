var markHeight  = 1.8;
var johnHeight = 1.78;
var markWeight = 105;
var johnWeight = 84;

function bmiCalc (weight, height ){ 
    return weight/ (height*height);
    
}

var markBmi = bmiCalc(markWeight,markHeight);
console.log(markBmi);
var johnBmi = bmiCalc(johnWeight,johnHeight);
console.log(johnBmi);
var maxBmi = markBmi>johnBmi;
console.log ('Is Mark\'s BMI greater than John ? '+ maxBmi);
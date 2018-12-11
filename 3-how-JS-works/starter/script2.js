var MarkHeight;
var JohnHeight;
var MarkMass;
var JohnMass;

var BmiCalculator=function  ($height, $mass){
    console.log($mass/$height*$height);
    return ($mass/$height*$height);
}

var MarkBmi =BmiCalculator(MarkHeight,MarkMass);
var JohnBmi =BmiCalculator(JohnHeight,JohnMass);

var isBiggerBmi =console.log ('Is Mark\'s BMI higher than john\'s ?' + MarkBmi > JohnBmi)
//ex1
function square(number){
    return number*number;

}
square(2);
square(5);

//ex2

function cube(number){
    return number*number*number;

}
cube(2);
cube(3);


//ex3

function charAtIndex(string,number){
    return string.charAt(number);
    
}
charAtIndex("hello",2);
charAtIndex("world",0);


//ex4

function addFourNums(num1,num2,num3,num4){
    return num1+num2+num3+num4;
}
addFourNums(1,1,1,1);
addFourNums(1,2,3,4);


//ex5

function periemeterRect(width,length){
    return (width+length)*2;
}

periemeterRect(5,10);


//ex6

function areaRect(width,length){
    return width*length;
}
areaRect(5,10);


//ex7

function perimeterTriangle(side1,side2,side3){
    return side1 + side2 + side3;
}
perimeterTriangle(3,3,3);

//ex8

function areaTriangle(base,height){
    return (base*height)/2;
}
areaTriangle(15,4);


//ex9
function tripleArea(width,length){
    return (width*length)*3 ;
}

tripleArea(4,10);




//Advanced
//ex10

function perimeterofcircle(raduis){
  return 2*Math.PI*raduis;
}
perimeterofcircle(3);
perimeterofcircle(5);
perimeterofcircle(8);


//ex11
function areraofcircle (radius){
    return Math.PI * radius * radius;
}
areraofcircle(3);
areraofcircle(5);
areraofcircle(8);

//ex12
function inchestocentimetres(inches){
    return inches * 2.54;
}
inchestocentimetres(3);
inchestocentimetres(4);
inchestocentimetres(10);

//ex13
function centimetrestoinches(centimeters){
    return centimeters/2.54;
}
centimetrestoinches(10);
centimetrestoinches(12);
centimetrestoinches(16);

//ex14
function totalsecondsconverter(hours,minutes,seconds){
    if (minutes>60){
        return "saisir un nombre inferieur a 60 ";
    }
    else{
    return (hours * 3600) + (minutes * 60) + seconds;
}}
totalsecondsconverter(0,3,4);
totalsecondsconverter(1,0,7);
totalsecondsconverter(1,1,5);

//ex15
function billtotal(number){
    return (number * 0.09875)+(number*0.2)+number;
}
billtotal(15);
billtotal(20);
//ex16
function converttokilometers(miles){
    return miles * 1.60934;
}
converttokilometers(5);
converttokilometers(9);


//Extra practice
//ex17
function square1(x) {
  return x * x;
}
square1(4);

function square2 (x) {
  return x * x;
}
square2(4);

function square3 (x)  {
return x * x;
}
square3(4);



//ex18

function largest(a,b) {
    if (a > b) {
    return a;
  } else {
    return b;
  }
}




//ex20
convertTemp(12); 

function convertTemp(celsius) {
  f= celsius * 1.8 + 32;
  return f;
}

//ex21
capitalize("pizza"); 

function capitalize(x) {
  return x.charAt(0).toUpperCase()+x.slice(1);
}
//ex22
function billing(p1,p2,p3) {
    pourboire=(p1+p2+p3)*0.15;
    prixsomme=p1+p2+p3+pourboire;
    return "your total is "+prixsomme.toFixed()+" "+"thank you for the "+pourboire.toFixed()+"tip";
}
billing(10,20,30);
//ex23
function awesomeMessage(firstname,interest,hobby) {
    return "bonjour, je suis "+firstname+", je suis "+interest+",j'ai"+hobby;
  
}
awesomeMessage("rayen","un developpeur web"," 23 ans");













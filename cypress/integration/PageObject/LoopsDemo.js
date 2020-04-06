
//let age=20;
let age=2;

if(age>=18)
{

    console.log("eligible for vote");
}

else{

    console.log("Not eligible for vote");
}

console.log("Program exited............")

//let num=10;
let num=11;

if(num%2==0){
    console.log("Number is even")
}
else{
    console.log("Odd number")
}

let a=10, b=200, c=30;

if(a>b && a>c){
    console.log("a is largest number")
}
else if(b>a && b>c){
    console.log("b is largest number")

}
else{
    console.log("c is largest number")

}

let weekno=6;

switch(weekno){

    case 1: console.log("sunday");
    break;

    case 2: console.log("Monday");
    break;

    case 3: console.log("Tuesday");
    break;

    case 4: console.log("Wednesday");
    break;

    case 5: console.log("Thursday");
    break;

    case 6: console.log("Friday");
    break;

    case 7: console.log("Saturady");
    break;

    default: console.log("Invalid week no")

    
}

for(let i=1; i<=10; i++){

   if(i==5 || i==7 || i==1)
   //break;
  continue;

    console.log(i)
}

function show(a){

    console.log("hi i am Parametrize show function"+" "+a)

}

function Display(a,CallBack) {

    console.log("I am in Dispaly method")
    CallBack(a);
    
}

Display(101,show);

function show1(){

    console.log("hi i am show1 function")

}

function Display1(CallBack) {

    console.log("I am in Dispal1y method")
    CallBack();
    
}

Display1(show1);

//***************************************************************************** */


function geeky(callBack) {

    console.log("Hi i am in geeky function")
    let a=101;
    callBack(a);
}

//geeky(function A(a) {
    geeky(function (a) {  //anonymous function we can also write this ..removed function name
    console.log("I am call back A function"+" "+a)
})

//***************************************************************************** */

setTimeout(function() {
    
console.log("i will run  function after 10 sec")

}, 10000);

function geeky1(callBack) {

    console.log("Hi i am in geeky function")
    let a=105;
    callBack(a);
}

geeky1((a) => console.log("I am call back A function"+" "+a))

//***************************************************************************** */

let arrow=(a,b) =>{
 
    console.log(a+" "+b)
    return(a+b);
}

arrow(10,20);
console.log(arrow(10,48))

var myfun=() =>{
    console.log("I am arrow function")
}

myfun();

//***************************************************************************** */


var users=["Mack", "Jhon", "David"]

//function adduser(username){
function adduser(username,callBack){

    setTimeout(function() {

        users.push(username)
        callBack();
        
    }, 200);

}

function getuser() {

    setTimeout(function() {
         
        console.log(users)

    }, 100);
    
}

adduser('Mohan',getuser);   //callback
//adduser('Jack');
//getuser();
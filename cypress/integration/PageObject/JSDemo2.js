class Test{


constructor(){

    let name,Marks;
    console.log("************************Encapsulation Demo**********************************")


}

getName(){
    return this.name;
}
getMarks(){
    return this.Marks;
}

setName(name){
    this.name=name;
}

setMarks(Marks){
    this.Marks=Marks;
}



//**************************************************************************************************

   static a="Jhon"  //static
   b=101 // non-static

   m1(){
 console.log("this is a non-static method")

   }

  static m2(){

    console.log("this is a static method")
   
      }
   

}
//see the o/p while accessing level

console.log(Test.a) //Jhon
Test.a="Akshat"
console.log(Test.a)

console.log(Test.b) //undefined
//Test.m1()// non static method  so error incorrect way of accessing
Test.m2()// static method we can directly access

//so we have to create object for non-static methods and variables

let t=new Test()
console.log(t.b)
t.m1()

console.log("************************Encapsulation Demo**********************************")
t.setName("Mack")
t.setMarks(90)

console.log(t.getName())
console.log(t.getMarks())
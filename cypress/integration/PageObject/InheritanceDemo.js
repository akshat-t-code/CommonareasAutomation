
class A{

     a=100;

     display(){
         console.log(this.a)
     }

     roi(){
         return 7.7;
     }

}

class B extends A{

    b=200;

    show(){
        console.log(this.b)
    }

    roi(){
        return 8.5;
    }

}

let b=new B()
b.display()
b.show()
console.log(b.roi())
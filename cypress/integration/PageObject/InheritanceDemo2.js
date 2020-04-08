class Animal{

constructor(color){
    console.log("parent cons is called")
    this.color=color;
}

printcolor(){
    console.log("printcolor method is called")
    console.log(this.color)
}


}


class Dog extends Animal{

    constructor(color,food){

        super(color)
        this.food=food;
        console.log("child cons is called")
    }

    eating(){
        console.log("Eating", this.food)
    }

   display(){
       
       this.printcolor()
       this.eating()
   }

}

let d=new Dog("Black","DogFood")
d.display();
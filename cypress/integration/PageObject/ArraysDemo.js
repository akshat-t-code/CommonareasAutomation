let animals=["dog","hourse","cat"]  //creating arrya
console.log(animals)
//or
let num=new Array(10,20,30,40)
console.log(num)
//how to accress

console.log(num[1]) //20
animals[1]="Rat"   //modification by index
console.log(animals)

let myArray=[100, "Hello", true, 20.07]
console.log(myArray)

let Person={

    name:"jhon",
    age:78


};

let Person2={

    name:"David",
    age:90
    
};

let myArray2=[Person,Person2]  //object also can store
console.log(myArray2)
console.log(myArray2[0])
console.log(animals.length) //3

//looping 
for(let i=0; i<=num.length-1; i++){
   console.log( num[i])

}
//********************************************************************************** */
//for/of loop
for(ele of num){
    console.log(ele)
}

//Recoznize of aarys
console.log(typeof num)

console.log(Array.isArray(num))

//Methos of Arrays

console.log(animals.toString()) //dog,Rat,cat

console.log(animals.join("*")) //dog*Rat*cat

let lastEle=animals.pop() //

console.log(lastEle) //cat
console.log(animals)  //[ 'dog', 'Rat' ]

console.log(animals.push("Lion")) //add an ele at end of the array and length will be return
//3
console.log(animals)  //[ 'dog', 'Rat', 'Lion' ]

console.log(animals.shift()) //remove 1st ele and return that ele

console.log(animals.unshift("Pigi"))
console.log(animals) //[ 'Pigi', 'Rat', 'Lion' ]

delete animals[1]
console.log(animals) //[ 'Pigi', <1 empty item>, 'Lion' ]

let arr1=[30,40.90]
let arr2=["A","B"]
console.log(arr1.concat(arr2)) //[ 30, 40.9, 'A', 'B' ]

console.log(animals.slice(1))

console.log(animals.sort())
console.log(num.sort())
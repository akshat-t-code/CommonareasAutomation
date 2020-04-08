
let d=new Date()
console.log(d)

console.log(d.getDate()) //1-31
console.log(d.getMonth())  //0-11
console.log(d.getFullYear())

console.log(d.getDate()+"  "+d.getMonth()+1+"  "+d.getFullYear())

console.log(d.getHours())//0-23
console.log(d.getMinutes())//0-59
console.log(d.getSeconds())//0-59

console.log(d.getHours()+":"+d.getMinutes()+":"+d.getSeconds())

function Clock() {
    
    let d=new Date();
    let h=d.getHours();
    let m=d.getMinutes()
    let s=d.getSeconds();

   if(h==0){
   h=12;
   }
   if(h>12)
   h=h-12;

   if(h<10)
   h="0"+h;

   if(m<10)
   m="0"+m;

   if(s<10){
   s="0"+s;

   }
    console.log(h+":"+m+":"+s)
    //setTimeout(Clock,1000);
}

//Clock()


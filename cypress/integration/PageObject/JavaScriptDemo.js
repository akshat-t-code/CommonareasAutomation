class Student {
      

    constructor(sname,sid,grade){
        this.sname=sname;
        this.sid=sid;
         this.grade=grade;

    }

  /*  setDeatils(sname,sid,grade) {

        this.sname=sname;
        this.sid=sid;
         this.grade=grade;

    //     this.sname="Akasht"
    //    this.sid=101
    //     this.grade="A"
        
    }

    */

    display(){
        console.log(this.sid,this.sname,this.grade)
    }

    
}

let s=new Student("jhon",78,"B")
let s1=new Student("Mack",289,"A")
let s2=new Student("Rose",201,"B")
//s.setDeatils("jhon",78,"B")
//console.log(s.sid)
s.display()
s1.display()
s2.display()



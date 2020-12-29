//explicit

let fname:string;
let age:number;

fname="name";
//fname=24;

age=23;
//age="";

//union

let some:(string|number|boolean);
some="name";
some=2;
some=true;

let add=(a:number,b:number,c?:number)=>{
      
     return a+b+c;
}
console.log(add(1,2,3));



//Create a function greetUser that takes a username and a callback function. 
// If the username is not empty, the callback should return "Welcome <name>", otherwise return "Guest user".


/*
function test(a1:string, fun:(a:number,b:number)=>void){
    console.log(a1)
    fun(2,3);
}


function sum(a:number,b:number):void{
 console.log( a+b)
}

test("sanjay", sum);*/

/*
function test(a:string,callback_sum:(a:number,b:number)=>number){
    console.log(callback_sum(1,2));
    console.log(a)
}

function sum(a:number,b:number):number{
    return a+b;
}

test("sanjay" ,sum);*/


//Write a function calculate that accepts two numbers and a callback. 
// The callback should decide whether to add, subtract, multiply, or divide.
/*
function calculate(a:number,b:number,fun:(tyep:string)=>string)
{
    let type:string =fun("multiply")
    if(type==="multiply"){
      let output:number=  a*b
      console.log(output)
    }
    else if(type==="addition"){
      let output:number=  a+b
      console.log(output)
      console.log(output)
    }
    else if(type==="substraction"){
      let output:number=  a-b
      console.log(output)
    }
    else{
      let output:number=  a/b
      console.log(output)
    }
    
}
function decide(type:string):string{
    return type
    console.log(type)
}

calculate(3,4,decide);*/
/*
let calculate= function(a:number,b:number,callback:(a:number,b:number)=>number):void{
let result:number = callback(a,b)
console.log(result)
}

function add(a:number,b:number):number{
    return a+b;
}
function subtract(a:number,b:number):number{
    return a-b;
}
function multiply(a:number,b:number):number{
    return a*b;
}
function division(a:number,b:number):number{
    return a/b;
}

calculate(2,3,add)
calculate(3,4,multiply)


*/


let calculate = function(a:number,b:number,callback:(x:number,y:number)=>number):void{
    let result = callback(a,b)
    console.log(result)
}
function add(a:number,b:number):number{
 return a+b
}
function subtract(a:number,b:number):number{
 return a-b
}
function multiply(a:number,b:number):number{
 return a*b
}
function division(a:number,b:number):number{
 return a/b
}

calculate(2,3,add)
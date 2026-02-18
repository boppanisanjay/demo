//overload
/*
function input(id:number):string;
function input(name:string):string;

function input(param:number|string):string{
    if(typeof param==="number"){
        return `user id:  ${param}`
    }
    else{
    return `name is:${param}`
    }
   
}

console.log(input(2))
console.log(input("sanjay"))
*/

/*
function add(a:number,b:number):number
function add(a:number,b:number,c:number):number

function add(a:number,b:number,c?:number):number{
    if(c!==undefined){
        return a+b+c;
    }
    else{
        return a+b;
    }
}
*/
/*
function add(a: number, b: number): number;
function add(a: number, b: number, c: number): number;

function add(a: number, b: number, c?: number): number {
    if (c !== undefined) {
        return a + b + c;
    } else {
        return a + b;
    }
}

console.log(add(2, 3));      // 5
console.log(add(2, 3, 4));   // 9
*/


/*
//diff return types
function input(a:string):string;
function input(a:number):number;

function input(a:number|string):string|number
{
    if(typeof a=="number"){
        return a
    }
    return a;
}
console.log(input(25))
console.log(input(":sanjay"))
*/


/*
function input(a:string):string;
function input(a:number):number;
function input(a:boolean):string;

function input(a:number|string|boolean):number|string{
    if(typeof a=="string"){
        return `name : ${a}`
    }
    else if (typeof a=="number"){
        return a
    }
    else{
        if(a){
            return "is married" 
        }
        return "bachelor"
    }
    
}

console.log(input(true))



*/


















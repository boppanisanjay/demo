//Arrrya is dynamic - we can store n number of values
//for in loop --- uses index
//for of --- value
//regular for loop
//check whether an elemnt is present in array or not using function
// a functions takes an array and return an array - take array of string type and covert all the string to uppercase and return uppercase array
//

//tuple
//for in loop tuple
//for of loop tupke
// tuple array(array of tuples)


/*
function array():void{
//array
let arr:string[]=[];
arr[0]="sanjay"
arr[1]="sanju"
arr[2]="jay"
arr[3]="nani";

let arr1:string[]=["Snajy","jay", "sanju", "nani"]

for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}
}

array()*/

/*
function array(){
//array
let arr:string[]=[];
arr[0]="sanjay"
arr[1]="sanju"
arr[2]="jay"
arr[3]="nani";

let arr1:string[]=["Snajy","jay", "sanju", "nani"]

for(let i in arr1){
    console.log(arr1[i])
}
}
array()*/
/*
function array(){
//array
let arr:string[]=[];
arr[0]="sanjay"
arr[1]="sanju"
arr[2]="jay"
arr[3]="nani";

let arr1:string[]=["Snajy","jay", "sanju", "nani"]

for(let value of arr1){
    console.log(value)
}
}
array()*/

//array


function array(arr:string[]):string []{
    let arr2:string[]=[]

    for(let i in arr){
        arr2[i]=arr[i].toUpperCase()

    }
    return arr2
}

let arr1:string[]=["Snajy","jay", "sanju", "nani"]
console.log(array(arr1))








	
    
    /*
    1. Named function
	2. Named Function with parameters and return type
	3. Named function with Rest parameter function - single type
	4. Named function with Rest parameter function - multi type
	5. Named function with optional parameter
    6. Named function with default parameter
    */

/*
    //Nmaed funtion
    function greet():void{
      console.log("Hi Hello")
    }

    //Named Function with parameters and return type
    function add(a:number,b:number):number{
        return a+b
    }


    //Named function with Rest parameter function - single type
    function count(...numbers:number[]){
        let len:number = numbers.length
        console.log(len)
    }

    //Named function with Rest parameter function - multi type

    function count1(...fields:(number| string) []){
        console.log(fields.length)

    }

    // Named function with optional parameter
    function fields(id:number,firstname:string,email?:string){
            console.log(`${id} ${firstname} ${email}`)
            console.log(id,firstname,email)
    }


    //6. Named function with default parameter
    function roi(amount:number,rate:number=0.30):number{
        return amount*rate
    }

    greet();
    console.log(add(1,2))
    count(1,2,3,4,5,6,7,8)
    count1(1,2,"sanjay",4);
    fields(2,"sanjay")//2 sanjay undefined
   console.log( roi(20))
   console.log( roi(20,0.50))

*/

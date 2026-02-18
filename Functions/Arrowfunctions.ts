/*

	1. Anonymous function
	2. Anonymous function with parameters and return type
	3. Anonymous function with Rest parameter function - single type
	4. Anonymous function with Rest parameter function - multi type
	5. Anonymous function with optional parameter
	6. Anonymous function with default parameter

*/

//Anonymous function
    let greet1 =():string=>{
      console.log("Hi Hello")
      return "hello"
    }

    //Anonymous Function with parameters and return type
   let add1 = (a:number,b:number):number=>{

   
   return a + b
   }

    //Anonymous function with Rest parameter function - single type
    let count2 = (...numbers:number[])=>{
        let len:number = numbers.length
        console.log(len)
    }

    //Anonymous function with Rest parameter function - multi type

   let count21=  (...fields:(number| string) [])=>{
        console.log(fields.length)

    }

    // Anonymous function with optional parameter
   let fields1=(id:number,firstname:string,email?:string)=>{
           
            if(email!=="undefined"){
            console.log(id,firstname,email)
            }
            else{
                 console.log(`${id} ${firstname} ${email}`)
            }
   
    }


    //Anonymous function with default parameter
   let roi1= (amount:number,rate:number=0.30):number=>{
        return amount*rate
    }

    greet1();
    console.log(add1(1,2))
    count2(1,2,3,4,5,6,7,8)
    count21(1,2,"sanjay",4);
    fields1(2,"sanjay")//2 sanjay undefined
   console.log( roi1(20))
   console.log( roi1(20,0.50))


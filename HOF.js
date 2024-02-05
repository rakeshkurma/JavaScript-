
 let arr=[1,2,3,4];

    function Calculate(Func){

         let output=[];

         for(var i=0;i<4;i++){
        
            output[i]= Func(arr[i]);
         }

 return output;
    }


    const Square=(i)=> i*i; // Anonymous Function

   const Cube=(i)=>i*i*i;

    
    console.log(Calculate(Square))


    console.log(Calculate(Cube));
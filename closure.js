

  function x(){

    for(var i=1;i<=5;i++){

         function fun(){
            let x=i;
             setTimeout(function(){
       console.log(x);
        },x*1000);
         }
        fun();
    }

  }


  x();
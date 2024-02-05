

function fun(x){


    if(x==6) {
        return ;
    }

    setTimeout(function(){
        console.log(x);
    } ,x*1000)

    fun(x+1);
}

var x=1;

fun(x);
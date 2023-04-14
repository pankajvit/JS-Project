// Example - 1 of scope, scope chain & lexical Environment
/*
function a(){
    console.log(b);
}

var b = 10;
a();

*/
// Example - 2 of scope, scope chain & lexical environment

function a(){
    var b = 10;
    c();
    function c(){
        console.log(b);
    }
}
a();
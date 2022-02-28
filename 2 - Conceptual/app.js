function b() {
    var myvar;
    console.log(myvar); // undefined
}

function a() {
    var myvar = 2;
    console.log(myvar); // 2
    b();
}

var myvar = 1;
console.log(myvar) // 1
a();
console.log(myvar); // 1


console.log(1 == '1')
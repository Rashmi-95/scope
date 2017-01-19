var foo = 6;
function foo() {
    var bar;
    var scopedVar = 1;
    function zip() {
        var quux;
        foo = 2;
    }
}
console.log(foo);
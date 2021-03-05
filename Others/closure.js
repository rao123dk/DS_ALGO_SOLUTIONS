const partialApply = (fn, ...fixedArgs) => {
    console.log(fixedArgs);

    return function (...remainingArgs) {
      return fn.apply(this, fixedArgs.concat(remainingArgs));
    };
};


const add = (a, b) => a + b;
const add10 = partialApply(add, 10,4);
const actual = add10(5);

console.log(actual);



//>>>>>>>>>>>>>>>>>>>>>>>

function outer() {
	var b = 10;
	var c = 100;
   return function inner() {

         var a = 20;
         console.log("a= " + a + " b= " + b);
         a++;
         b++;
    }
   //return inner;
}

var y = outer();

console.dir(y)

console.log(y())

console.dir(y)


console.log(y())
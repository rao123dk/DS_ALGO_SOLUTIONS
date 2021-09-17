function compose(...functions){
    return function(factor){
        return functions.reduce(function (arg, fn) {
            return fn(arg)
        }, factor)
    }
}


function composeRight(...functions){
    return function(factor){
        return functions.reduceRight(function (arg, fn) {
            return fn(arg)
        }, factor)
    }
}


const add = (b)=> 2 + b;

const mul = (b)=> 2 * b;

console.log(


    compose(add,mul)(3)
)
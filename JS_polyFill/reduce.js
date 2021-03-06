
Array.prototype.myReduce = function(callback, initial) {
    let values = this;

    values.forEach((item, index) => {
        initial = initial !== undefined ? callback(initial, item, index) : item
    })

    return initial;
}




const arr = [5, 10];

var sum = arr.myReduce((a, b) => a + b, 3);

console.log("sum", sum)

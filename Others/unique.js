var names = ["dk", "rao","dk","jsk"];

// Array.prototype.unique = function(){
//     var self = this;
//     return this.filter(function(elem, index){
//         return self.indexOf(elem) === index;
//     })
// }
// console.log(names.unique());



Array.prototype.unique_ = Array.prototype.unique || function() {
    var arr = [];
    this.reduce(function (hash, num) {
        console.log('hash, num: ', hash, num);
        if(typeof hash[num] === 'undefined') {
            hash[num] = 1;
            arr.push(num);
        }
        return hash;
    }, {});
    return arr;
}


// names = [1,2,3,6,5,6, '1'] // Bug in this case

console.log(names.unique_());
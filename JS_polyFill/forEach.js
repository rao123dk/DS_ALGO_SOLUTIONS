Array.prototype.myForEach = function(callback){
    for (var i = 0; i < this.length; i++) {
       callback(this[i], i, this)
    }
}




const arr = [5, 10,20,30,40];
arr.myForEach((i) => console.log(i));

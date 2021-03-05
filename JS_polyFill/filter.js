Array.prototype.myFilter = function(callback){
    let tempArr = []
    for(let item of this) {
        var flag = callback(item)
        if(flag){
             tempArr.push(item)
        }

    }
	return tempArr;
}




const arr = [5, 10,20,30,40];
const gr20 = arr.myFilter((i) => i > 20);

console.log(gr20);
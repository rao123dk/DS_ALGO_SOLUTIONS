Array.prototype.myMap = function(callback){
    let tempArr = []
    for(let item of this) {
        tempArr.push(callback(item))
    }
	return tempArr;
}




const arr = [10,20,30,40];
const addArray = arr.myMap((i) => i + i);

console.log(addArray);
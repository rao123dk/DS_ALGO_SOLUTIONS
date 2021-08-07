var data = [1, 2, [3, 4, [5, [6]]], 7, 0]


function flatten(data, arr=[]){
   data.forEach((item)=>{
      if(Array.isArray(item)){
        flatten(item, arr)
      } else {
      	arr.push(item)
      }
    })

  return arr;
};


console.log(
  flatten(data)
)
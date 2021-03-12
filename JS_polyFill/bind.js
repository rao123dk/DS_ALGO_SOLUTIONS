
Function.prototype.myBind = function(obj, ...arg1){
  const functionToBind = this;

  return function(...arg2){
      functionToBind.apply(obj, [...arg1, ...arg2])
  }

}

function greet(a, b){
  return this.name + this.age + a + b
}

let obj = {
  name: "dk ",
  age: 24
}




// let newGreet = greet.bind(obj,"hh");

let newGreet = greet.myBind(obj,"Hello ");


console.log(newGreet("!"))
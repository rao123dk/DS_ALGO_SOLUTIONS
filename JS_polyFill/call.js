Function.prototype.myCall = function(obj,...arg){

    console.log(this)
}



function greet(message) {
    console.log(message, this.name);
}
const obj = {
    name: "Dheeraj Kumar Rao"
};

// greet.call(obj, "welcome ");

greet.myCall(obj, "welcome ");
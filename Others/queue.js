function Queue(items){
  this.items = items;
}

Queue.prototype.enqueue = function(item){
  this.items.push(item);
}


Queue.prototype.dequeue = function(item){
  this.items.shift();
}

Queue.prototype.front = function(item){
  return this.items[0]
}

Queue.prototype.isEmpty = function(item){
  return !!this.items.length
}




Queue.prototype.printQueue = function(item){
  return this.items;
}



var item = [1, 4, 5];
var newQue = new Queue(item);


newQue.enqueue(22);
newQue.enqueue(44);
console.log(newQue.printQueue());
newQue.dequeue();

console.log(newQue.printQueue());

console.log(newQue.front());

console.log(newQue.isEmpty());




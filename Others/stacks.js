function Stacks(items){
  this.items = items;
}

Stacks.prototype.push = function(item){
  this.items.push(item);
}


Stacks.prototype.pop = function(item){
  this.items.pop();
}

Stacks.prototype.peek = function(item){
  return this.items[this.items.length - 1]
}

Stacks.prototype.isEmpty = function(item){
  return !!this.items.length
}




Stacks.prototype.printStacks = function(item){
  return this.items;
}



var item = [1, 4, 5];
var newStack = new Stacks(item);


newStack.push(22);

console.log(newStack.printStacks());

newStack.pop();

console.log(newStack.printStacks());

console.log(newStack.peek());







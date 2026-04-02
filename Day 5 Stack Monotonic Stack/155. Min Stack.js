"use strict";

var MinStack = function() {
  this.array =[];
};


MinStack.prototype.push = function(val) {
  this.array.push(val);
};


MinStack.prototype.pop = function() {
  this.array.pop();
};


MinStack.prototype.top = function() {
  return this.array[this.array.length-1];
};


MinStack.prototype.getMin = function() {
  return Math.min(...this.array);
};
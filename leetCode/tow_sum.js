/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Given nums = [2, 7, 11, 15], target = 9,

Example:-

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

*/

// LINK :- https://leetcode.com/problems/two-sum/
let nums = [2,5,5,11]
let target =10;


//SOLUTION-1
var twoSum = function(nums, target) {
    let goesTill = nums.length;
  for(let i = 0; i<=goesTill; i++){
    for(let k = i+1; k<=goesTill; k++){
      if(nums[i] + nums[k] === target){
        return [i, k]
       }

    }
  }
};

console.log(twoSum(nums,target))

//SOLUTION-2
const twoSum = function (arr, target)  {
	let numObject = {};
	for (let i = 0; i < arr.length; i++) {
		let thisNum = arr[i];
		numObject[thisNum] = i;

	}

	for (var i = 0; i < arr.length; i++) {
		let diff = target - arr[i];
		if (numObject.hasOwnProperty(diff) && numObject[diff] !== i) {
			return [i, numObject[diff]];
		}
	}
}



//SOLUTION-3
const twoSum = function(nums, target) {
    const comp = {};
    for(let i=0; i<nums.length; i++){
        if(comp[nums[i] ]>=0){
            return [ comp[nums[i] ] , i]
        }
        comp[target-nums[i]] = i
    }
};




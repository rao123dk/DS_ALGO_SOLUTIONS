// https://leetcode.com/problems/search-insert-position/

/**

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.


Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  for(var i= 0; i<= nums.length; i++){
    if(nums[i] === target){
       return i;
    } else if(target < nums[i]){
           return i;
    } else if(nums[i] < target && ( nums[i+1] === undefined || nums[i+1] > target )){
      return i+1;
    }

  }

};

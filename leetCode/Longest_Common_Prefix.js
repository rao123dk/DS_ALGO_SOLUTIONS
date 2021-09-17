/**
 * https://leetcode.com/problems/longest-common-prefix/
 * Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".



Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 */

//Method -1

// var longestCommonPrefix = function(array){
//     if ( array === undefined || array.length === 0) {
//         return ""
//      }
//      A = array.sort()
//      a = A[0], b = A[A.length - 1]
//      var i = 0
//      while ( i < a.length && a.charAt(i) == b.charAt(i)) i++
//      return a.substring(0,i)
//  }


var longestCommonPrefix = function(strs) {
    let long_prefix="";
    if(!strs || !strs.length ){
        return long_prefix;
    }
    let itr_word = strs[0];
    for(let item of itr_word){
        console.log('item: ', item);
        for(let i=1; i< strs.length; i++){
            console.log(strs[i])
        }

    }
    return strs;
};

let strs = ["flower","flow","flight"];
console.log(longestCommonPrefix(strs))
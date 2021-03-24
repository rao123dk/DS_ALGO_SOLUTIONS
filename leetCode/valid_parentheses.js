//https://leetcode.com/problems/valid-parentheses/

/**
 *
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 */


var isValid = function(s) {
    if (s === null || s.length <= 0) return true;
    var cArr = s.split('');
    console.log('cArr: ', cArr);

    var stack = [];

    for (var c of cArr) {
        console.log(' c: ',  c);
        if (c === '[') {
            stack.push(']');
        }
        else if (c === '{') {
            stack.push('}');
        }
        else if (c === '(') {
            stack.push(')');
        }
        else if (stack.length === 0 || c !== stack.pop()) {
            //console.log("uu",stack)
            return false;
        }
        console.log("uu",stack)
    }
    if (stack.length === 0) return true;
    return false;
};

var isValid = function(s) {

    let closeMap = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    };
    let charStack = [];

    // validate input
    if(s===null || s===undefined)
        return false;

    for(var i = 0; i<s.length; i++){
        let curChar = s.charAt(i);
        console.log('curChar: ', curChar);
        let topElement;
        if(closeMap[curChar] !== undefined){
            topElement = (charStack.length===0) ? '#' : charStack.pop();
            if(topElement !== closeMap[curChar])
                return false;
        }else{
            charStack.push(curChar);
        }
    }
    return charStack.length === 0;
};

console.log(isValid("()[]{}"));
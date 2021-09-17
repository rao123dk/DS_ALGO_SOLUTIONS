// https://leetcode.com/problems/excel-sheet-column-title/

/**
Example 1:

Input: columnNumber = 1
Output: "A"
Example 2:

Input: columnNumber = 28
Output: "AB"
Example 3:

Input: columnNumber = 701
Output: "ZY"
Example 4:

Input: columnNumber = 2147483647
Output: "FXSHRXW"
 */

const alphabet = (number)=>{
    return String.fromCharCode(96 + number).toUpperCase();
  }

  console.log(alphabet(26));

  var columnNumber = 2147483647;


  var convertToTitle = function(columnNumber) {

      var res = "";
        while(columnNumber > 0){
            if(columnNumber <=26){
              res += alphabet(columnNumber)
              columnNumber = 0
          } else {
              let rem = parseInt ( columnNumber / 26);
              console.log("44",rem)
              res += alphabet(rem)
                columnNumber = (columnNumber / 26) - 1
          }


      }

    return res


  };


  console.log(convertToTitle(columnNumber))

  //>>>>>>>>>>>>
  var convertToTitle = function(columnNumber) {
    let ret = ''
    while (columnNumber > 26) {
      const temp = columnNumber % 26
      if (temp == 0) {
        ret = `Z${ret}`
        columnNumber = Math.floor(columnNumber/26) - 1
      } else {
        ret = `${String.fromCharCode(64+temp)}${ret}`
        columnNumber = Math.floor(columnNumber/26)
      }
    }
    return `${String.fromCharCode(64+columnNumber)}${ret}`
  };
  var columnNumber = 2147483647;

  console.log(convertToTitle(columnNumber))
// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


/**
 * @param {string[]} strs
 * @return {string}
 */

let prefix = '';
var longestCommonPrefix = function (strs) {

    if (strs.length === ''){
        return '';
    }
    for (let i = 0; i < strs.length; i++) {
        { let j = 0; j < strs[i].length; j++ } {
            if (strs[i][j] === strs[i][j] === strs[i][j]) {
                prefix += strs[i][j];
            }
            return prefix
        }
        {
        }
        console.log(strs[i][0])
        return prefix;
    }

};

longestCommonPrefix(["flower", "flow", "flight"]);
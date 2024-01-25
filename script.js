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

var longestCommonPrefix = function (strs) {

    if (strs.length == 0) {
        return '';
    }

    let prefix = '';
    for (let j = 0; j < strs[0].length; j++) {
        for (let i = 0; i < strs.length; i++) {
            if (strs[i][j] != strs[0][j]) {
                return prefix
            }
        }
        prefix += strs[0][j];
    }

    return prefix;

};

console.log(longestCommonPrefix(["dog", "racecar", "car"]));
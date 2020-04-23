/**
Name: Julian Gonzalez
Date: 4/23/2020
Description: Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
Credit: This solution is not my own as I was unable to implement a stack correctly for this algorithm.
This solution was uploaded to Leetcode by Judew
 */

/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function (s) {

    if (s.length <= 0) {
        return true
    };

    let arrayOfBrackets = s.split("");
    let memory = [];

    for (let bracket of arrayOfBrackets) {
        if (bracket == '[') {
            memory.push(']');
        } else if (bracket == '{') {
            memory.push('}');
        } else if (bracket == '(') {
            memory.push(')');
        } else if (memory.length == 0 || bracket != memory.pop()) {
            return false;
        };
    }

    if (memory.length === 0) {
        return true
    };

    return false;
};

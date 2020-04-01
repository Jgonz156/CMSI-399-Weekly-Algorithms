/**
Name: Julian Gonzalez
Date: 3/30/2020
Description: Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

(last word means the last appearing word if we loop from left to right) 

If the last word does not exist, return 0.

Note: A word is defined as a maximal substring consisting of non-space characters only.
 */

 // param {string} s
 // return {number}

var lengthOfLastWord = function(s) {
    trimmedString = s.trim();
    if(trimmedString == ''){return 0}
    arrayOfWords = trimmedString.split(" ");
    lastWord = arrayOfWords[arrayOfWords.length-1];
    return lastWord.length
}
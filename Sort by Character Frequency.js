/**
Name: Julian Gonzalez
Date: 4/16/2020
Description: Given a string, sort it in decreasing order based on the frequency of characters.
 */

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    let arrayOfString = s.split("");
    let characters = new Array(arrayOfString.length);
    let frequency = new Array(arrayOfString.length);
    let database = [characters, frequency];

    for (c = 0; c < arrayOfString.length; c++) {
        if (arrayOfString[c] === characters[characters.indexOf(arrayOfString[c])]) {
            frequency[characters.indexOf(arrayOfString[c])]++;
        } else {
            characters[c] = arrayOfString[c];
            frequency[c] = 1;
        }
    }

    let largestCurrentFrequency = 0;
    let largestCurrentFrequencyIndex = 0;

    for (b = 0; b < frequency.length; b++) {
        if (largestCurrentFrequency < frequency[b]) {
            largestCurrentFrequency = frequency[b];
            largestCurrentFrequencyIndex = frequency.indexOf(frequency[b]);
        }
    }

    let finalString = "";

    let NextMostFrequencyAndIndexFinder = function (databaseInput, excludedIndexs) {
        let largestCurrentFrequency = 0;
        let largestCurrentFrequencyIndex = 0;

        for (i = 0; i < databaseInput[1].length; i++) {
            if ((largestCurrentFrequency <= databaseInput[1][i]) && (excludedIndexs.indexOf(databaseInput[1].indexOf(databaseInput[1][i])) == -1)) {
                largestCurrentFrequency = databaseInput[1][i];
                largestCurrentFrequencyIndex = databaseInput[1].indexOf(databaseInput[1][i]);
            }
        }

        return [largestCurrentFrequency, largestCurrentFrequencyIndex];

    }

    let excludedIndexsArray = new Array(frequency.length);

    for (a = 0; a < arrayOfString.length; a++) {
        for (d = largestCurrentFrequency; d > 0; d--) {
            finalString = finalString + characters[largestCurrentFrequencyIndex];
        }
        excludedIndexsArray[a] = largestCurrentFrequencyIndex;
        frequency[largestCurrentFrequencyIndex] = null;

        let resultArray = NextMostFrequencyAndIndexFinder(database, excludedIndexsArray);

        largestCurrentFrequencyIndex = resultArray[1]
        largestCurrentFrequency = resultArray[0]
    }

    return finalString;
};
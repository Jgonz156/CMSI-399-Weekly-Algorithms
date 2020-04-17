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

    for (i = 0; i < arrayOfString.length; i++) {
        if (arrayOfString[i] === characters[characters.indexOf(arrayOfString[i])]) {
            frequency[characters.indexOf(arrayOfString[i])]++;
        } else {
            characters[i] = arrayOfString[i];
            frequency[i] = 1;
        }
    }

    let largestCurrentFrequency = 0;
    let largestCurrentFrequencyIndex = 0;

    for (i = 0; i < frequency.length; i++) {
        if (largestCurrentFrequency < frequency[i]) {
            largestCurrentFrequency = frequency[i];
            largestCurrentFrequencyIndex = frequency.indexOf(frequency[i]);
        }
    }

    let finalString = "";

    let NextMostFrequencyAndIndexFinder = function (databaseInput, excludedIndexs) {
        let largestCurrentFrequency = -1;
        let largestCurrentFrequencyIndex = -1;

        for (i = 0; i < databaseInput[1].length; i++) {
            if ((largestCurrentFrequency < databaseInput[1][i]) && (excludedIndexs.indexOf(databaseInput[1][i]) == -1)) {
                largestCurrentFrequency = databaseInput[1][i];
                largestCurrentFrequencyIndex = databaseInput[1].indexOf(databaseInput[1][i]);
            }
        }
        return [largestCurrentFrequency, largestCurrentFrequencyIndex];

    }

    let excludedIndexsArray = new Array(frequency.length);

    for (a = 0; a < arrayOfString.length; a++) {
        for (i = largestCurrentFrequency; i > 0; i--) {
            finalString = finalString + characters[largestCurrentFrequencyIndex];
        }
        excludedIndexsArray[a] = largestCurrentFrequencyIndex;
        console.log(excludedIndexsArray)
        let resultArray = NextMostFrequencyAndIndexFinder(database, excludedIndexsArray);
        console.log(resultArray)
        largestCurrentFrequencyIndex = resultArray[1]
        largestCurrentFrequency = resultArray[0]
    }

    return finalString;
};
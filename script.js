function firstNonRepeatedChar(str) {
 // Write your code her
    // Edge case: if the string is empty, return null
    if (str.length === 0) {
        return null;
    }

    // Create a frequency map to count occurrences of each character
    const charCount = {};

    // Populate the frequency map
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Iterate through the string to find the first non-repeated character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // If no non-repeated character is found, return null
    return null;
}

	


	

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 

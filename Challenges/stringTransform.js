function transformString(text) {
    if (text.length % 3 === 0 && text.length % 5 === 0) {
        // Reverse the string first
        text = text.split("").reverse().join("");
        // Then convert each character to ASCII code
        text = text.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (text.length % 3 === 0) {
        text = text.split("").reverse().join("");
    } else if (text.length % 5 === 0) {
        text = text.split('').map(char => char.charCodeAt(0)).join(' ');
    }
    return text;
}

// Example usage
const text = "Helloowrtyftsiu";
const transformedText = transformString(text);
console.log(transformedText);  // Output: 117 105 115 116 102 116 121 114 119 111 108 108 101 72 because the length of the string is 15 and it is divisible by 3 and 5
const text2 = "Helloo";
const transformedText2 = transformString(text2);
console.log(transformedText2); 
const text3 = "World"; //output: oolleH because the length of the string is 6 and it is divisible by 3
const transformedText3 = transformString(text3);
console.log(transformedText3); // Output: 87 111 114 108 100 because the length of the string is 5 and it is divisible by 5
const text4 = "Hello world";
const transformedText4 = transformString(text4);
console.log(transformedText4); // Output: Hello world because the length of the string is 11 and it is not divisible by 3 or 5

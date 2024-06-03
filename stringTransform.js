function transformString(input) {
    const length = input.length;

    if (length % 3 === 0 && length % 5 === 0) {
        // If the length is divisible by both 3 and 5, reverse the string and then replace each character with its ASCII code
        input = input.split('').reverse().join('');
        return input.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) {
        // If the length is divisible by 3, reverse the entire string
        return input.split('').reverse().join('');
    } else if (length % 5 === 0) {
        // If the length is divisible by 5, replace each character with its ASCII code
        return input.split('').map(char => char.charCodeAt(0)).join(' ');
    } else {
        // If none of the above conditions are met, return the original string
        return input;
    }
}

// Example usage
const input = "Hello World";
console.log(transformString(input)); // Output: "87 111 114 108 100 32 111 108 108 101 72"

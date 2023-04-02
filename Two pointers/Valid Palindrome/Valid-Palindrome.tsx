function isPalindrome(s: string): boolean {
    // First, create an array of characters from the input string
    const array = s
      // Convert the string to lowercase
      .toLowerCase()
      // Remove all non-alphanumeric characters using a regular expression
      .replace(/[^A-Za-z0-9]/g, '')
      // Remove all spaces using a regular expression
      .replace(/\s/g, '')
      // Convert the resulting string to an array of characters
      .split('');
  
    // Iterate over the array from the beginning and end simultaneously
    for (let i = 0; i < array.length; i++) {
      // Get the character at position i
      const first = array[i];
      // Get the character at the corresponding position from the end of the array
      const second = array[array.length - 1 - i];
  
      // If the characters are not the same, the string is not a palindrome
      if (first !== second) {
        return false;
      }
    }
  
    // If we make it through the loop without finding any non-matching characters, the string is a palindrome
    return true;
  }
  
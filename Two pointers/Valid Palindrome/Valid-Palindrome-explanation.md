# Explanation of the Two Sum exersice

## Exersice
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.


### Example 1:
```js
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
```

### Example 2:
```js
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
```

### Example 3:
```js
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
```


## Explanation


### First Aproach
The first thing we will do is to remove all the spaces, all the special characters, and then convert all the letters to lowercase. Then we will reverse the string, and compare it with the original string without reversing it.


#### Time complexity
The time complexity is O(n). This would require iterating over the string once, and in the worst case, if all characters are alphanumeric, we would have to iterate over the entire string, so the temporal complexity would be O(n).


#### Memory complexity
The memory complexity is O(n). For spatial complexity, you need to store the resulting string, which can be up to n characters, so the spatial complexity is also O(n).


### Second Aproach (pointers)
We will use 2 ponters, the first in the begining of the string, and the second one in the end of the string. We don't need to reverse the string, we only need to compare the characters of the two pointers, if the value of the pointers are equal, we shift the pointers to the next value to comapre.



#### Time complexity
The time complexity is O(n)
This approach has a time complexity of O(n), where n is the length of the nums array, since we iterate over the array only once.


#### Memory complexity
The memory complexity is O(1) 
This approach has a space complexity of O(1), because we are not using any extra memory
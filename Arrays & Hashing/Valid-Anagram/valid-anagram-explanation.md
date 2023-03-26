# Explanation of the Valid Anagram exersice

## Exersice
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


### Example 1:
```js
Input: s = "anagram", t = "nagaram"
Output: true
```

### Example 2:
```js
Input: s = "rat", t = "car"
Output: false
```


## Explanation


### First Aproach
We want to count how many types of letters we have in each string, and put it in a hash. Then we have to compare the hashes between them.


#### Time complexity
The time complexity is O(s + t)


#### Memory complexity
The memory complexity is O(s + t)

### Second Aproach
We want to sort each string, and then compare them


#### Time complexity
The time complexity is O(n log(n))


#### Memory complexity
The memory complexity is O(n)


## Code explanation

This code checks whether two strings s and t are anagrams of each other. First, the function checks if the strings have the same length. If they don't, the function returns false.

Next, the function converts the strings s and t into arrays of characters using the split() method. The first array is initialized with the characters of the s string, and the second array is initialized with the characters of the t string.

The function then iterates over the second array and searches for each character in the first array using the indexOf() method. If it finds the character, it marks it as null in the first array to avoid counting it again. If it doesn't find the character, the first and second arrays aren't anagrams, and the function returns false.

If the function iterates over the entire second array without issue, the first and second arrays are anagrams, and the function returns true.

This approach has a time complexity of O(n^2), where n is the length of the s and t strings, since the indexOf() method is executed in each iteration of the for loop. Additionally, the first array is modified in place, which can cause unintended side effects if used elsewhere in the code. Overall, this approach is not as efficient as the approach I presented earlier.

In terms of memory complexity, this code uses O(n) memory to store the first and second arrays.
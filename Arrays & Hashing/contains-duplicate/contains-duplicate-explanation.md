# Explanation of the Contains Duplicate exersice

## Exersice
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.


### Example 1:
```js
Input: nums = [1,2,3,1]
Output: true
```

### Example 2:
```js
Input: nums = [1,2,3,4]
Output: false
```

### Example 3:
```js
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
```

## Explanation

### First Aproach
We want to compare each one of the numbers with the rest. 
- The first one with the rest of the numbers
- The second one with the rest
- etc...

#### Time complexity
The time complexity is O(n^2)
This is O(n^2), where n is the size of the array

#### Memory complexity
The memory complexity is O(1)

### Second Aproach
We can sort the array.

Instead of seen the array like this [1,2,3,1], we can sort it and seet like this [1,1,2,3]. This can be usefull, because we only need to inherate to the array once.

This second aproach is better that the firts (brute force option)

#### Time complexity
The time complexity is O(n*log(n))

#### Memory complexity
The memory complexity is O(1)

### Third aproach

We can sacrificate memory complexity to achieve better time performance by using a hashset. 
The hash set is going to allow us to insert elements into the hashset. So if the we have the hashset [] and the array[1,2,3,1], we check in the hash if the first element if the array (array[0] = 1) is in the hash. In this case is not, so we add the number in the hash. hashset[1]. We do this every time, and we compare each number with the values we add in the hash.

this is the more eficient way
#### Time complexity
The time complexity is O(n)

#### Memory complexity
The memory complexity is up to O(n)
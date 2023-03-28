# Explanation of the Two Sum exersice

## Exersice
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.


### Example 1:
```js
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

### Example 2:
```js
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

### Example 3:
```js
Input: nums = [3,3], target = 6
Output: [0,1]
```


## Explanation


### First Aproach (Brute force)
In firts place, we pick the value of the first item in the array. Then we check if the sum with any of the other values of the array is the value target.

In second place, we make the exact same process with the second value of the array, except with the first value, as in the first time we already check if the sum between this two values was the correct value, we don't need to check it again.
This will be repeated with all the values of the array until find the sum that gives us the target value.


#### Time complexity
The time complexity is O(n^2)


#### Memory complexity
The memory complexity is O()


### Second Aproach (One Pass)

The best way we can solve this problem is using a hash. We can initalize a empty hash, and we store in that hash the diference between the target value, and the actual value of the array that we are iteracting. While we are doing this, in the moment that we find one value that is the exact number that we need for complete that diference that we find in the other operation, we find the number we where searching for.

The function starts by initializing an empty hash table hash. It then iterates over the nums array, and for each element nums[i], it calculates the difference between the target and the element, i.e., target - nums[i]. It then checks if this difference is already in the hash table. If it is, it means that the current element and some other element in the array add up to the target. In that case, the function returns an array containing the indices of the two elements, which are hash[diff] and i.

If the difference is not already in the hash table, it means that we haven't seen the other element that adds up to the current element yet. In that case, we add the current element and its index to the hash table.

#### Time complexity
The time complexity is O(n)
This approach has a time complexity of O(n), where n is the length of the nums array, since we iterate over the array only once.


#### Memory complexity
The memory complexity is O(n) 
This approach has a space complexity of O(n), since we store all the elements of the nums array in the hash table.
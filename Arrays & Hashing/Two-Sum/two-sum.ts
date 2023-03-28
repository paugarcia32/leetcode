function twoSum(nums: number[], target: number): number[] {
    // Initialize an empty hash map to store each number in nums and its index
    let hash: { [key: number]: number } = {};
    // Loop through each number in nums
    for (let i = 0; i < nums.length; i++) {
        // Calculate the difference between the target and the current number
        let diff = target - nums[i];
        // Check if the difference is already in the hash map
        if (diff in hash) {
            // If the difference is in the hash map, return the indices of the two numbers that add up to the target
            return [hash[diff], i];
        } else {
            // If the difference is not in the hash map, add the current number and its index to the hash map
            hash[nums[i]] = i;
        }
    }
    // If no two numbers add up to the target, return an empty array
    return [];
}
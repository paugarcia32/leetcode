function isAnagram(s: string, t: string): boolean {
    // Check if the strings have the same length
    if (s.length !== t.length) return false;

    // Convert the strings into arrays of characters
    let first: Array<string | null> = s.split('');
    const second = t.split('');

    // Iterate over the second array of characters
    for (let i = 0; i < second.length; i++) {
        const element = second[i];

        // Search for the current character in the first array
        let found = first.indexOf(element);

        if (found !== -1) {
            // If it's found, mark it as null to avoid counting it again
            first[found] = null;
        } else {
            // If it's not found, the arrays aren't anagrams
            return false;
        }
    }

    // If the entire second array was iterated over without issue, they are anagrams
    return true;
}

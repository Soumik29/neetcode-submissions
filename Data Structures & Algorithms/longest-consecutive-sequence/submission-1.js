class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const hashSet = new Set(nums);
        let longest = 0;
        for(let num of hashSet){
            if(!hashSet.has(num-1)){
                let len = 1;
                while(hashSet.has(num + len)){
                    len++;
                }
                longest = Math.max(longest, len);
            }
        }
        return longest;
    }
}

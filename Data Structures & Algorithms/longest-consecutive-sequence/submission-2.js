class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longestSeq = 0;
        let hashSet = new Set(nums);
        for(let i = 0; i < nums.length; i++){
            let count = 0;
            if(!(hashSet.has(nums[i] - 1))){
                count = 1;
            }
            while(hashSet.has(nums[i] + count)){
                count += 1;
            }
            longestSeq = Math.max(longestSeq, count);
        }
        return longestSeq;
    }
}

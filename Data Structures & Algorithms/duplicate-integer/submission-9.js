class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hashSet = {};
        for(let i = 0; i < nums.length; i++){
            
            if(nums[i] in hashSet){
                return true;
            }
            hashSet[nums[i]] = i;
        }
        return false;
    }
}

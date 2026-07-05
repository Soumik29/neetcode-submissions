class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = {};
        if(nums.length == 1){
            return false;
        }
        for(let i = 0; i < nums.length; i++){
            if(map[nums[i]] == nums[i]){
                return true;
            }
            map[nums[i]] = nums[i];
        }
        // for(let i = 0; i < nums.length; i++){
        //     for(let j = i + 1; j < nums.length; j++){
        //         if(nums[i] === nums[j]){
        //             return true;
        //         }
        //     }
        // }
        return false;
    }
}

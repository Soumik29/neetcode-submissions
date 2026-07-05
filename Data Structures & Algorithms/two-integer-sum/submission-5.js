class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hashMap = {};
        for(let i = 0; i < nums.length; i++){
            if((target - nums[i]) in hashMap){
                return [hashMap[target - nums[i]], i];
            }
            hashMap[nums[i]] = i;
        }
        // for(let i = 0; i < nums.length; i++){
        //     for(let j = i + 1; j < nums.length; j++){
        //         if(nums[i] + nums[j] === target){
        //             return [i, j];
        //         }
        //     }
        // }
    }
}

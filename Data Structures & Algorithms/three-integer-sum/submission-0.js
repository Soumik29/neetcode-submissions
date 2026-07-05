class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const res = new Set()
        nums = nums.sort((a, b) => a - b);
        for(let i = 0; i < nums.length; i++){
            if (nums[i] == nums[i - 1] && i > 0){
                continue
            }
            let left = i + 1
            let right = nums.length - 1;
            while(left < right){
                const sum = nums[i] + nums[left] + nums[right];
                if(sum < 0){
                    left++;
                } else if (sum > 0){
                    right--;
                } else {
                    res.add([nums[i], nums[left], nums[right]])
                    left++
                    while(nums[left] === nums[left - 1] && left < right){
                        left++
                    }
                }
            }
        }
        return Array.from(res)
    }
}

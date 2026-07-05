class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = [1];
        for(let i = 0; i < nums.length - 1; i++){
            prefix[i + 1] = prefix[i] * nums[i];
        }

        let postfix = Array.from({length: nums.length});
        postfix[postfix.length - 1] = 1;
        for(let i = nums.length - 1; i > 0; i--){
            postfix[i-1] = postfix[i] * nums[i];
        }
        const res = [];
        for(let i = 0; i < postfix.length; i++){
            res.push(postfix[i] * prefix[i]);
        }
        return res;
    }
}

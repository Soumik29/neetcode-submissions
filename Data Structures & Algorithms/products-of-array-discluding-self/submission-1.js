class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let output = [], mul = 1;
        for(let i = 0; i < nums.length; i++){
            for(let j = 0; j < nums.length; j++){
                if(i === j){
                    continue;
                }else{
                    mul *= nums[j];
                }
            }
            output.push(mul);
            mul = 1;
        }
        return output;
    }
}

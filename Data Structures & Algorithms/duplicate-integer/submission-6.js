class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hashSet = new Set();
        for(let x of nums){
            if(hashSet.has(x)){
                return true;
            }
            hashSet.add(x);
        }
        return false;
    }
}

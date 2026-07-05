class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequencyMap = {};
        const bucketArray = Array.from({length: nums.length + 1}, () => []);
        console.log(bucketArray);
        for(let i = 0; i < nums.length; i++){
            frequencyMap[nums[i]] = (frequencyMap[nums[i]] || 0) + 1;
        }
        for(const ke in frequencyMap){
            bucketArray[frequencyMap[ke]].push(parseInt(ke));
        }
        const result = [];
        for(let i = bucketArray.length - 1; i > 0; i--){
            for(const items of bucketArray[i]){
                result.push(items);
                if(result.length === k){
                    return result;
                }
            }
        }
    }
}

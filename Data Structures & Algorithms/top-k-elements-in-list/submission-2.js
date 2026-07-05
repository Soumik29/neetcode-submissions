class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqCounter = {};
        let freqNum = Array.from({length: nums.length + 1}, () => []);
        for(let i = 0; i < nums.length; i++){
            if(freqCounter[nums[i]]){
                freqCounter[nums[i]] += 1;
            }else{
                freqCounter[nums[i]] = 1;
            }
        }
        for(const freq in freqCounter){
            if(freqNum[freqCounter[freq]]){
                freqNum[freqCounter[freq]].push(freq);
            }
        }
        console.log(freqNum);
        const res = [];
        for(let i = freqNum.length - 1; i > 0; i--){
            if(freqNum[i].length > 0){
                for(const f of freqNum[i]){
                    if(res.length !== k){
                        res.push(f);
                    }
                }
            }
        }
        return res;
        
    }
}

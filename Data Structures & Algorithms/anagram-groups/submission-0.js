class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
       let hashMap = {};
       for(let s of strs){
            const charFrequency = new Array(26).fill(0);
            for(let i = 0; i < s.length; i++){
                charFrequency[s[i].charCodeAt(0) - 97]++;
            }
            const charJoin = charFrequency.join(',');
            if(!hashMap[charJoin]){
                hashMap[charJoin] = [];
            }
            hashMap[charJoin].push(s);    
       }
       return Object.values(hashMap);
    }
}

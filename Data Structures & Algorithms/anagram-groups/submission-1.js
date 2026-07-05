class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let hashMap = {};
        for(let i = 0; i < strs.length; i++){
            const alph = new Array(26).fill(0);
            for(const str of strs[i]){
                alph[str.charCodeAt(0) - 97] = (alph[str.charCodeAt(0) - 97] || 0) + 1;
            }
            const key = alph.join(',');
            if(hashMap[key]){
                hashMap[key].push(strs[i]);
            }else{
                hashMap[key] = [strs[i]];
            }
        }
        return Object.values(hashMap);
    }
}

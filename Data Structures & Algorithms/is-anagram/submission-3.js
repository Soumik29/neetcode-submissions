class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let alpha = new Array(26).fill(0);
        if(s.length !== t.length){
            return false;
        }
        for(let i = 0; i < s.length; i++){
            alpha[s[i].charCodeAt(0) - 97]++;
            alpha[t[i].charCodeAt(0) - 97]--;
        }
        return alpha.every(ele => ele === 0);
    }
}

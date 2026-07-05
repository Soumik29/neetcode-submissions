class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let alphabet = new Array(26).fill(0);
        if(s.length !== t.length){
            return false;
        }
        for(let i = 0; i < s.length; i++){
            alphabet[s[i].charCodeAt(0) - 97] = (alphabet[s[i].charCodeAt(0) - 97] || 0) + 1;
            alphabet[t[i].charCodeAt(0) - 97] = (alphabet[t[i].charCodeAt(0) - 97] || 0) - 1;
        }
        console.log(alphabet);
        for(const num of alphabet){
            if(num > 0){
                return false;
            }
        }
        return true;
    }
}

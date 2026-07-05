class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let removeNAC = s.replace(/[^a-zA-Z0-9]/g, '')
        let lower = removeNAC.toLowerCase();
        let reversed = 0;
        let original = 0;
        let stack = [];
        for(let i = lower.length - 1; i > 0; i--){
            stack.push(lower[i]);
            reversed++;
        }
        for(let i = 0; i < stack.length; i++){
            if(stack[i] === lower[i]){
                original++;
            }
        }
        if(reversed === original){
            return true;
        }
        return false;
    }
}

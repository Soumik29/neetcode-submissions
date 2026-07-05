class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0, right = s.length - 1;
        while(left < right){
            while(left < right && !this.alphaNumeric(s[left])){
                left++;
            }
            while(right > left && !this.alphaNumeric(s[right])){
                right--;
            }
            if(s[left].toLowerCase() !== s[right].toLowerCase()){
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    /**
     * @param {char} c
     * @return {boolean}
     */
    alphaNumeric(s){
        return (s >= 'A' && s <= 'Z' ||
                s >= 'a' && s <= 'z' ||
                s >= '0' && s <= '9');
    }
}

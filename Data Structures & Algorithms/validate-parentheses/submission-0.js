class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stackBrackets = {
            ')': '(',
            '}': '{',
            ']': '['
        };
        const stack = [];
        for(let c of s){
            if (c === '{' || c === '(' || c === '['){
                stack.push(c);
                console.log(stack);
            } else if(c in stackBrackets){
                const top = stack.pop();
                if(top !== stackBrackets[c]){
                    return false;
                }
            }else {
                return false;
            }
        }
        return stack.length === 0;
    }
}

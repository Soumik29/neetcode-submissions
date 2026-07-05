class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0;
        let area = 0;
        for (let i = 0; i < heights.length; i++){
            for (let j = i + 1; j < heights.length; j++){
                if (heights[i] > heights[j]){
                    area = heights[j] * (j - i);
                } else {
                    area = heights[i] * (j - i);
                }

                if (area > max){
                    max = area;
                }
            }
        }
        return max;
    }
}

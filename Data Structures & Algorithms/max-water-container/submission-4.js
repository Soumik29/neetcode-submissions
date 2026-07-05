class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let maximumArea = 0;
        while(left < right){
            let area = 0;
            area = (right - left) * Math.min(heights[left], heights[right])
            if (area > maximumArea){
                maximumArea = area;
            }
            if (heights[left] > heights[right]){
                right--;
            }else{
                left++;
            }
        }
        return maximumArea;
    }
}

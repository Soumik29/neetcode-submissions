class Solution:
    def trap(self, height: List[int]) -> int:
        res = 0
        n = len(height)
        for i in range(1, n - 1):
            leftMax = height[i-1]
            for j in range(i):
                leftMax = max(leftMax, height[j])
            rightMax = height[i+1]
            for j in range(i+1, n):
                rightMax = max(rightMax, height[j])
            temp = min(leftMax, rightMax) - height[i]
            if temp < 0:
                res += 0
            else:
                res += temp
        return res
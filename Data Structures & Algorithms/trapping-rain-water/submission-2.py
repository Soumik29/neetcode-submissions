class Solution:
    def trap(self, height: List[int]) -> int:
       n = len(height)
       res = 0
       if n == 0:
        return 0
       leftMax = [0] * n
       rightMax = [0] * n
       leftMax[0] = height[0]
       for i in range(1, n):
         leftMax[i] = max(leftMax[i - 1], height[i])

       rightMax[0] = height[0]
       for i in range(n-2, -1, -1):
         rightMax[i] = max(rightMax[i+1], height[i+1]);
       
       for i in range(n):
        miniHeight = min(leftMax[i], rightMax[i]) - height[i]
        if miniHeight < 0:
            res += 0
        else:
            res += miniHeight
       return res